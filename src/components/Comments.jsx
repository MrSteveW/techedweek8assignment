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
    <div>
      <div>
        <div className="">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-green-300 p-4 mb-4">
              <p>{comment.username}</p>
              {/* <p>Posted on {comment.created_at}</p> */}
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
    </div>
  );
}
