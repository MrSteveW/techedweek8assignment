import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <Link href={`posts/${post.id}`}>
      <div className=" bg-sliced-purple flex rounded-2xl">
        <div className="h-30 w-20 relative m-3">
          <Image src={post.img} alt="" fill={true} />
        </div>
        <div className="flex flex-col justify-around">
          <p className="font-bold"> {post.title}</p>
          <p>by {post.username}</p>
          <p className="italic text-sm">
            {new Date(post.created_at).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
    </Link>
  );
}
