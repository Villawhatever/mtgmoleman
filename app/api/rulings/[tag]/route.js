import clientPromise from "app/lib/mongodb";

export const revalidate = 60;
export const dynamic = "force-static";

export async function GET(_request, { params }) {
  "use server";

  try {

    const client = await clientPromise;
    const db = client.db("Moleman");
    const tag = params.tag;

    const rulings = await db.collection("rulings").find({ tags: tag }).toArray();
    return Response.json(rulings);
  } catch (ex) {
    console.error(ex);
    return Response.json({});
  }
}
