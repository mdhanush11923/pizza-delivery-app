import { Post } from "@prisma/client";
import { db } from "..";

export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export async function fetchPostBySearchTerm(
  term: string
): Promise<PostWithData[]> {
  return await db.post.findMany({
    include: {
      topic: {
        select: {
          slug: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    where: {
      OR: [
        { title: { contains: term, mode: "insensitive" } },
        { content: { contains: term, mode: "insensitive" } },
        { topic: {slug: {contains: term, mode: "insensitive"}}}
      ],
    },
  });
}

export async function fetchPostByTopicSlug(
  slug: string
): Promise<PostWithData[]> {
  return (await db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  }));
}

export async function fetchTopPosts(): Promise<PostWithData[]> {
  return (await db.post.findMany({
    include: {
      _count: { select: { comments: true } },
      user: { select: { name: true } },
      topic: { select: { slug: true } },
    },
    orderBy: { comments: { _count: "desc" } },
    take: 10,
  }));
}
