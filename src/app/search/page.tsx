import PostList from '@/components/posts/post-list';
import { fetchPostBySearchTerm } from '@/db/queries/posts';
import { redirect } from 'next/navigation';
import React from 'react'

interface SearchPageProps {
  searchParams: Promise<{ term?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const term = resolvedParams?.term || "";

  if (!term) {
    redirect("/");
  }

  return (
    <PostList fetchData={() => fetchPostBySearchTerm(term)} />
  )
}
