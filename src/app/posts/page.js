import { db } from "@/utils/utilities";
import Link from "next/link";

export default async function AllPosts() {
  const posts = (await db.query(`SELECT * FROM posts`)).rows;

  return (
    <div className="h-screen bg-amber-200">
      <div className="text-center m-4">These are all the posts</div>
      <div className="text-center m-4">Sort by ASC or DESC</div>
      <div className="border">
        <ul>
          {posts.map((post) => (
            <Link href={`posts/${post.id}`} key={post.id}>
              {post.title} by {post.username}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
