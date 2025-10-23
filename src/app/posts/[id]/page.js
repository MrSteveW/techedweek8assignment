import { db } from "@/utils/utilities";

export default async function IndividualPost({ params }) {
  const objectParams = await params;

  const post = (
    await db.query(`SELECT * FROM posts WHERE id = ${objectParams.id}`)
  ).rows[0];

  return (
    <div>
      <h2>This is an individual post with the ID of {objectParams.id}</h2>
      <h2>{post.title}</h2>
    </div>
  );
}
