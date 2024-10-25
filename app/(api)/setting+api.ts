/* eslint-disable @typescript-eslint/no-unused-vars */
import { neon } from '@neondatabase/serverless';

export async function GET(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT isglobaltrackingenabled FROM setting where id=1 LIMIT 1  `;

    return Response.json({ data: response[0] });
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
