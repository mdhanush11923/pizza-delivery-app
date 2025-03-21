import { Comment } from "@prisma/client"; // Ensure correct import
import { db } from "..";

export type CommentWithAuthor = Omit<Comment, "user"> & {
  user: { name: string | null; image: string | null };
};

export async function fetchCommentsByItsPostId(
  postId: string
): Promise<CommentWithAuthor[]> {
  const comments = await db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  return comments as CommentWithAuthor[];
}
