// EDIT INDIVIDUAL POST
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/utilities";
import PostForm from "@/components/PostForm";

export default async function EditPost({ params }) {
  const { id } = await params;

  const post = (await db.query(`SELECT * FROM posts WHERE id = $1`, [id]))
    .rows[0];

  async function handleSubmit(formData) {
    "use server";

    // RE-SAVING A POST //
    const { username, title, content, img } = Object.fromEntries(formData);

    await db.query(
      `UPDATE posts SET username = $1, title = $2, content = $3, img = $4 WHERE id = $5`,
      [username, title, content, img, id]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }

  //   const post = (
  //     await db.query(`SELECT * FROM posts WHERE id = ${objectParams.id}`)
  //   ).rows[0];

  return (
    <div className="h-screen bg-amber-200">
      <div>Edit this post form</div>
      <PostForm handleSubmit={handleSubmit} post={post} />
    </div>
  );
}
