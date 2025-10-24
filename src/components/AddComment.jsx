import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/utilities";
import styles from "./addpost.module.css";

export default async function AddComment({ id }) {
  const user = await currentUser();

  async function handleSubmit(formData) {
    "use server";
    const { content } = Object.fromEntries(formData);

    const newPost = db.query(
      `INSERT INTO comments (post_id, username, content) VALUES ($1, $2, $3)`,
      [id, user.username, content]
    );
    revalidatePath(`posts/${id}`);
  }
  return (
    <div className="w-1/2 bg-white m-4 p-4 rounded-2xl">
      <form action={handleSubmit}>
        <label className="block text-gray-700 text-bg font-bold mb-2">
          Comment:
        </label>
        <textarea
          className={styles.commentInput}
          name="content"
          id="content"
          type="text"
          required
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
