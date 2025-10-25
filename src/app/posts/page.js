// LOOK AT ALL POSTS - SECURED
import { withAuth } from "@/utils/withAuth";
import { db } from "@/utils/utilities";
import Link from "next/link";
import PostThumb from "@/components/PostThumb";

async function AllPosts({ searchParams }) {
  const query = await searchParams;

  const posts = (await db.query(`SELECT * FROM posts`)).rows;
  let sortedPosts = posts ? [...posts] : [];

  if (query.sort === "asc") {
    sortedPosts = sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (query.sort === "desc") {
    sortedPosts = sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="h-screen">
      <div className="text-center m-4 text-xl text-white">
        <Link href="/posts/?sort=asc" className="hover:text-sliced-cyan">
          ascending
        </Link>{" "}
        or{" "}
        <Link href="/posts/?sort=desc" className="hover:text-sliced-cyan">
          descending
        </Link>
      </div>
      <div className="flex flex-wrap">
        {sortedPosts.map((post) => (
          <div key={post.id} className="w-1/4 m-4">
            <PostThumb post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(AllPosts);
