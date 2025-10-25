"use client";

export default function DelCommentButton({ commentId, postId, handleDelete }) {
  return (
    <button
      onClick={() => {
        handleDelete(commentId, postId);
      }}
      className="delete-button"
    >
      Delete comment
    </button>
  );
}
