import styles from "./addpost.module.css";

export default function AddPost({ handleSubmit, post }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 rounded-2xl bg-white">
        <form action={handleSubmit}>
          {/* TITLE */}
          <div className="m-4">
            <label className="block text-gray-700 text-bg font-bold mb-2">
              Title
            </label>
            <input
              className={styles.input}
              name="title"
              id="title"
              type="text"
              defaultValue={post?.title || ""}
              required
            />
          </div>

          {/* CONTENT */}
          <div className="m-4">
            <label className="block text-gray-700 text-bg font-bold mb-2">
              Post
            </label>
            <textarea
              className={styles.input}
              name="content"
              id="content"
              type="text"
              defaultValue={post?.content || ""}
              required
            />
          </div>
          {/* IMG */}
          <div className="m-4">
            <label className="block text-gray-700 text-bg font-bold mb-2">
              Image link
            </label>
            <input
              className={styles.input}
              name="img"
              id="img"
              type="url"
              defaultValue={post?.img || ""}
            />
          </div>
          <div className="text-center m-4">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
