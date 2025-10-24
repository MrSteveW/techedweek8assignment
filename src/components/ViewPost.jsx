import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

export default async function ViewPost({ post }) {
  const user = await currentUser();
  return (
    <div className="bg-sliced-purple flex flex-row w-1/2 p-4 mb-4">
      {post.img ? (
        <div className="h-30 w-20 relative m-1">
          <Image src={post.img} alt="" fill={true} />
        </div>
      ) : null}
      <div className="m-2">
        <h2>{post.title}</h2>
        <h2>By {post.username}</h2>
        <h2>{post.content}</h2>
        {user.username == post.username && (
          <Link
            href={`/posts/${post.id}/edit`}
            className="italic border rounded-lg p-1"
          >
            Edit post
          </Link>
        )}
      </div>
    </div>
  );
}
