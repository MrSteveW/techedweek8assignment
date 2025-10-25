// VIEW INDIVIDUAL POST PAGE - SECURED
import { withAuth } from "@/utils/withAuth";
import { db } from "@/utils/utilities";
import CommentForm from "@/components/CommentForm";
import ViewComments from "@/components/ViewComments";
import ViewPost from "@/components/ViewPost";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = (await db.query(`SELECT * FROM posts WHERE id = ${id}`)).rows[0];
  return {
    title: `${post.title}`,
    description: `Is it as good as sliced bread?`,
    openGraph: {
      description: `${post.title}`,
      url: `https://techedweek8assignment.vercel.app/posts/${post.id}}`,
    },
  };
}

async function IndividualPost({ params }) {
  const { id } = await params;
  const post = (await db.query(`SELECT * FROM posts WHERE id = ${id}`)).rows[0];

  return (
    <div className="justify-items-center">
      <ViewPost post={post} />
      <CommentForm id={post.id} />
      <ViewComments id={post.id} />
    </div>
  );
}

export default withAuth(IndividualPost);
