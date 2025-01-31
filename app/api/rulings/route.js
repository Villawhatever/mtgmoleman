import clientPromise from "app/lib/mongodb";

export const revalidate = 60;
export const dynamic = "force-static";

export async function GET(request) {
  "use server";

  try {
    const client = await clientPromise;
    const db = client.db("Moleman");

    const rulings = await db.collection("rulings").find({}).sort({ "dateAdded": -1 }).toArray();
    return Response.json(rulings);
  } catch (ex) {
    console.error(ex);
    return Response.json({});
  }
}
