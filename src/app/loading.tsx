import { Skeleton } from '@heroui/skeleton';
import React from 'react'

export default function loading() {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <Skeleton className="h-10" />
      <Skeleton className="h-7" />
    </div>
  );
}
