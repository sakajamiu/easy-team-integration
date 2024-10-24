import { neon } from "@neondatabase/serverless";

export async function GET(request: Request, { id }: { id: string }) {
  if (!id)
    return Response.json({ error: "Missing required fields" }, { status: 400 });

  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`
        SELECT
            employeeid as id,
            name,
            locationid as locationId,
            payrollid as payrollId
            
            
        FROM 
            users
        
        WHERE 
            locationid =${id}
      
    `;

    return Response.json({ data: response });
  } catch (error) {
    console.error("Error fetching recent employee:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}