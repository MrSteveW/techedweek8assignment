// ADD A NEW POST - SECURED
import { withAuth } from "@/utils/withAuth";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/utilities";
import PostForm from "@/components/PostForm";

async function AddPost() {
  const user = await currentUser();

  async function handleSubmit(formData) {
    "use server";

    const { title, content, img } = Object.fromEntries(formData);

    const newPost = db.query(
      `INSERT INTO posts (username, title, content, img) VALUES ($1, $2, $3, $4)`,
      [user.username, title, content, img]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div className="h-screen">
      <PostForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default withAuth(AddPost);
