"use client";

export default function DeleteButton({ commentId, postId, handleDelete }) {
  return (
    <button
      onClick={() => {
        handleDelete(commentId, postId);
      }}
    >
      Delete comment
    </button>
  );
}
