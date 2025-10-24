import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function NavBar() {
  const user = await currentUser();
  return (
    <div className="w-full h-10 flex items-center bg-sliced-blue font-fugaz text-white text-xl">
      <nav>
        <Link href="/" className="m-4">
          Home
        </Link>
        <Link href="/posts" className="m-4">
          Posts
        </Link>
        <Link href="/add-post" className="m-4">
          Add new post
        </Link>
      </nav>
      <div className="fixed right-30">{user.username}</div>
    </div>
  );
}
