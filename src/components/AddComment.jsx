import { revalidatePath } from "next/cache";
import { db } from "@/utils/utilities";

export default function AddComment({ id }) {
  async function handleSubmit(formData) {
    "use server";
    const { username, title, content } = Object.fromEntries(formData);

    const newPost = db.query(
      `INSERT INTO comments (post_id, username, content) VALUES ($1, $2, $3)`,
      [id, username, content]
    );
    revalidatePath(`posts/${id}`);
  }
  return (
    <div>
      <form action={handleSubmit}>
        {/* USERNAME */}
        <label className="block text-gray-700 text-bg font-bold mb-2">
          Name:
        </label>
        <input
          className="appearance-none block bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="username"
          id="username"
          type="text"
          required
        />

        {/* CONTENT */}
        <label className="block text-gray-700 text-bg font-bold mb-2">
          Comment:
        </label>
        <input
          className=" block bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="content"
          id="content"
          type="text"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
