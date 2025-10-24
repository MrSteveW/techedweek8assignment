// VIEW INDIVIDUAL POST PAGE - SECURED
import { withAuth } from "@/utils/withAuth";
import { db } from "@/utils/utilities";
import AddComment from "@/components/AddComment";
import Comments from "@/components/Comments";
import ViewPost from "@/components/ViewPost";

async function IndividualPost({ params }) {
  const objectParams = await params;
  const post = (
    await db.query(`SELECT * FROM posts WHERE id = ${objectParams.id}`)
  ).rows[0];

  return (
    <div className="justify-items-center">
      <ViewPost post={post} />
      <AddComment id={post.id} />
      <Comments id={post.id} />
    </div>
  );
}

export default withAuth(IndividualPost);
