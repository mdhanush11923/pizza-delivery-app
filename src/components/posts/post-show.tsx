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
    <div className="fles flex-col my-4 text-center">
      <h1 className="text-3xl font-bold my-5">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}
