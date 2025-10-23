import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full flex justify-between">
      <div className="m-2">Sliced Bread</div>
      <nav className="mr-2">
        <Link href="/">Home .</Link>
        <Link href="/posts">Posts .</Link>
        <Link href="/add-post">Add new post .</Link>
      </nav>
    </div>
  );
}
