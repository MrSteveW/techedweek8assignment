import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/utilities";

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
      <div className="flex flex-wrap -mx-3 mb-6"></div>
      <form action={handleSubmit}>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          {/* USERNAME */}
          <label className="block text-gray-700 text-bg font-bold mb-2">
            Username
          </label>
          <input
            className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="username"
            id="username"
            type="text"
            required
          />
          {/* TITLE */}
          <label class="block text-gray-700 text-bg font-bold mb-2">
            Title
          </label>
          <input
            className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="title"
            id="title"
            type="text"
            required
          />
        </div>
        {/* CONTENT */}
        <label class="block text-gray-700 text-bg font-bold mb-2">Post</label>
        <input
          className=" block w-1/4 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="content"
          id="content"
          type="text"
          required
        />
        {/* IMG */}
        <label class="block text-gray-700 text-bg font-bold mb-2">
          Image link
        </label>
        <input
          className="block w-1/4 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="img"
          id="img"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
