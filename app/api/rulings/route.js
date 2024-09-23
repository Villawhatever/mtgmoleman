import clientPromise from "app/lib/mongodb";

export const revalidate = 60;

export async function GET(request) {
  "use server";

  try {
    const client = await clientPromise;
    const db = client.db("Moleman");

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("tag");
    let find = {};
    if (query) {
      find = {
        tags: query
      }
    }
    const rulings = await db.collection("rulings").find(find).toArray();
    
    return Response.json(rulings);
  } catch (ex) {
    console.error(ex);
    return Response.json(null);
  }
}
