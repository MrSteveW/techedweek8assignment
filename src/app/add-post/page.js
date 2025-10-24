// ADD A NEW POST
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/utilities";
import PostForm from "@/components/PostForm";

export default function AddPost() {
  async function handleSubmit(formData) {
    "use server";

    const { username, title, content, img } = Object.fromEntries(formData);

    const newPost = db.query(
      `INSERT INTO posts (username, title, content, img) VALUES ($1, $2, $3, $4)`,
      [username, title, content, img]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div className="h-screen bg-amber-200">
      <div>Add new post form</div>
      <PostForm handleSubmit={handleSubmit} />
    </div>
  );
}
