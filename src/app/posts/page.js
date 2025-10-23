import { db } from "@/utils/utilities";
import Link from "next/link";

export default async function AllPosts({ searchParams }) {
  const query = await searchParams;
  console.log(query);

  const posts = (await db.query(`SELECT * FROM posts`)).rows;
  let sortedPosts = posts ? [...posts] : [];

  if (query.sort === "asc") {
    sortedPosts = sortedPosts.sort((a, b) => b.title - a.title);
  } else if (query.sort === "desc") {
    sortedPosts = sortedPosts.reverse((b, a) => a.title - b.title);
  }

  return (
    <div className="h-screen bg-amber-200">
      <div className="text-center m-4">
        Sort by <Link href="posts/?sort=asc">ASC</Link> or{" "}
        <Link href="posts/?sort=desc">DESC</Link>
      </div>
      <div className="border">
        <ul>
          {sortedPosts.map((post) => (
            <Link href={`posts/${post.id}`} key={post.id}>
              {post.title} by {post.username}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
