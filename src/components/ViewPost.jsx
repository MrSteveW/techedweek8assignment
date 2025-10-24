import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

export default async function ViewPost({ post }) {
  const user = await currentUser();
  return (
    <div className="bg-sliced-purple flex flex-row w-1/2 p-4 mb-4 rounded-2xl">
      {post.img ? (
        <div className="h-30 w-20 relative m-1">
          <Image src={post.img} alt="" fill={true} />
        </div>
      ) : null}
      <div>
        <div className="m-2">{post.title}</div>
        <div className="m-2">By {post.username}</div>
        <div className="m-2">{post.content}</div>
        {user.username == post.username && (
          <Link
            href={`/posts/${post.id}/edit`}
            className="italic  rounded-lg p-1.5 bg-sliced-cyan hover:bg-sliced-blue hover:text-white"
          >
            Edit post
          </Link>
        )}
      </div>
    </div>
  );
}
