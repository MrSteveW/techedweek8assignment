// INDIVIDUAL POST PAGE
import { db } from "@/utils/utilities";
import Image from "next/image";
import AddComment from "@/components/AddComment";
import Comments from "@/components/Comments";

export default async function IndividualPost({ params }) {
  const objectParams = await params;

  const post = (
    await db.query(`SELECT * FROM posts WHERE id = ${objectParams.id}`)
  ).rows[0];

  return (
    <div className="h-screen bg-blue-300 justify-items-center">
      <div className="bg-amber-200 flex flex-row w-1/2 p-4 mb-4">
        {post.img ? (
          <div className="h-30 w-20 relative m-1">
            <Image src={post.img} alt="" fill={true} />
          </div>
        ) : null}
        <div className="m-2">
          <h2>{post.title}</h2>
          <h2>By {post.username}</h2>
          <h2>{post.content}</h2>
        </div>
      </div>
      <AddComment id={post.id} />
      <Comments id={post.id} />
    </div>
  );
}
