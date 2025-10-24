import { db } from "@/utils/utilities";
import DeleteButton from "./DeleteButton";
import { revalidatePath } from "next/cache";

async function handleDelete(id, postId) {
  "use server";
  const result = db.query("DELETE FROM comments WHERE id = $1 RETURNING *", [
    id,
  ]);
  revalidatePath(`posts/${postId}`);
}

export default async function Comments({ id }) {
  const comments = (
    await db.query(`SELECT * FROM comments WHERE post_id = ${id}`)
  ).rows;
  return (
    <div className="w-full justify-items-center">
      <div className="w-1/2 flex flex-col ">
        {comments.map((comment) => (
          <div key={comment.id} className=" bg-green-300 p-4 mb-4 rounded-2xl">
            <p className="font-bold">
              {comment.username} on{" "}
              {new Date(comment.created_at).toLocaleDateString("en-GB")}
            </p>
            <p>{comment.content}</p>
            <DeleteButton
              commentId={comment.id}
              postId={id}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
