/* eslint-disable @typescript-eslint/no-unused-vars */
import { neon } from '@neondatabase/serverless';

export async function PUT(request: Request, { id }: { id: string }) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { isglobaltrackingenabled } = await request.json();
    const response =
      await sql`UPDATE setting SET isglobaltrackingenabled=${isglobaltrackingenabled} WHERE id=${Number(id)}`;

    return Response.json({ data: response });
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
