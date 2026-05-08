'use client';

import { SkeletonLine } from './base-skeleton';

export function ProjectSkeleton() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <SkeletonLine width="w-48" height="h-8" className="mx-auto mb-3" />
          <SkeletonLine width="w-20" height="h-1" className="mx-auto" />
          <SkeletonLine width="w-96" height="h-4" className="mx-auto mt-4" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <SkeletonLine key={i} width="w-24" height="h-9" className="rounded-full" />
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="h-40 bg-white/5 animate-pulse" />
              <div className="p-5">
                <SkeletonLine width="w-3/4" height="h-6" className="mb-2" />
                <SkeletonLine width="w-full" height="h-4" className="mb-1" />
                <SkeletonLine width="w-2/3" height="h-4" className="mb-3" />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3].map((j) => (
                    <SkeletonLine key={j} width="w-16" height="h-6" className="rounded" />
                  ))}
                </div>
                <SkeletonLine width="w-24" height="h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
