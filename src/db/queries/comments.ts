import { Comment } from "@prisma/client"; // Ensure correct import
import { db } from "..";
import { cache } from "react";

export type CommentWithAuthor = Omit<Comment, "user"> & {
  user: { name: string | null; image: string | null };
};

export const fetchCommentsByItsPostId = cache(
  async (postId: string): Promise<CommentWithAuthor[]> => {
    console.log("fetching comments");
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
);
