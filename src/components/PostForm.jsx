export default function PostForm({ handleSubmit, post }) {
  return (
    <div className="w-full px-3 mb-6 md:mb-0 bg-white">
      <form action={handleSubmit}>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          {/* TITLE */}
          <label className="block text-gray-700 text-bg font-bold mb-2">
            Title
          </label>
          <input
            className="appearance-none block w-1/4 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="title"
            id="title"
            type="text"
            defaultValue={post?.title || ""}
            required
          />
        </div>
        {/* CONTENT */}
        <label className="block text-gray-700 text-bg font-bold mb-2">
          Post
        </label>
        <input
          className=" block w-1/4 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="content"
          id="content"
          type="text"
          defaultValue={post?.content || ""}
          required
        />
        {/* IMG */}
        <label className="block text-gray-700 text-bg font-bold mb-2">
          Image link
        </label>
        <input
          className="block w-1/4 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="img"
          id="img"
          type="text"
          defaultValue={post?.img || ""}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
