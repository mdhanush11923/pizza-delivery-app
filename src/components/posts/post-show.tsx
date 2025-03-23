import { db } from "@/db";
import { notFound } from "next/navigation";

interface PostShowProps {
  postId: string
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({
    where: {
      id: postId
    }
  })

  if (!post) {
    return notFound()
  }

  return (
    <div className="flex flex-col gap-5 text-center">
      <h1 className="text-3xl font-bold mt-10">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}