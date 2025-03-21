import PostCreateForm from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { fetchPostByTopicSlug } from '@/db/queries/posts';
import React from 'react'

export default async function TopicShowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>

      <div className="justify-self-end">
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
