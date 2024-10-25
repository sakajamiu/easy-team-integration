/* eslint-disable @typescript-eslint/no-unused-vars */
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, employeeId, accessRoleId, locationId } = await request.json();

    if (!name || !email || !employeeId || !accessRoleId || !locationId) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const response = await sql`
      INSERT INTO users (
        name, 
        email, 
        employeeid,
        accessroleid,
        locationid,
        payrollid

      ) 
      VALUES (
        ${name}, 
        ${email},
        ${employeeId},
        ${accessRoleId},
        ${locationId},
        ${employeeId}
     );`;

    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
