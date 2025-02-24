import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    return Response.json({ message: "message" }, { status: 200 });
  } catch (error) {
    console.error("Database connection error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
