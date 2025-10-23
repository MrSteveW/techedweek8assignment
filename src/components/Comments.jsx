import { db } from "@/utils/utilities";

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
