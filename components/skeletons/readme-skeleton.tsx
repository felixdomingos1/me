'use client';

import { BaseSkeleton, SkeletonLine } from './base-skeleton';

export function ReadmeSkeleton() {
  return (
    <BaseSkeleton className="rounded-[28px]">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-3 w-3 rounded-full bg-white/10 animate-pulse" />
            ))}
          </div>
          <SkeletonLine width="w-48" height="h-4" />
        </div>
        <SkeletonLine width="w-full sm:w-36" height="h-10" className="rounded-xl" />
      </div>

      {/* Body */}
      <div className="space-y-8 p-4 sm:p-6 lg:p-8">
        {/* Hero Skeleton */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-4 sm:p-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <SkeletonLine width="w-32" height="h-7" className="rounded-full" />
            <SkeletonLine width="w-28" height="h-7" className="rounded-full" />
          </div>
          <SkeletonLine width="w-3/4" height="h-8" className="mb-3" />
          <SkeletonLine width="w-full" height="h-4" className="mb-2" />
          <SkeletonLine width="w-2/3" height="h-4" className="mb-4" />
          <div className="flex flex-wrap gap-3 mt-4">
            {[1, 2, 3].map((i) => (
              <SkeletonLine key={i} width="w-24" height="h-10" className="rounded-xl" />
            ))}
          </div>
        </div>

        {/* Stacks Skeleton */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <SkeletonLine width="w-8" height="h-8" className="rounded-xl" />
            <div>
              <SkeletonLine width="w-40" height="h-6" />
              <SkeletonLine width="w-32" height="h-3" className="mt-1" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <SkeletonLine width="w-5" height="h-5" className="rounded" />
                  <SkeletonLine width="w-28" height="h-5" />
                </div>
                <SkeletonLine width="w-full" height="h-4" />
                <SkeletonLine width="w-3/4" height="h-4" className="mt-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Skeleton */}
        <div className="rounded-2xl border border-white/10 p-4 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex items-center gap-3">
              <SkeletonLine width="w-8" height="h-8" className="rounded-xl" />
              <div>
                <SkeletonLine width="w-36" height="h-5" />
                <SkeletonLine width="w-48" height="h-3" className="mt-1" />
              </div>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <SkeletonLine key={i} width="w-16" height="h-8" className="rounded-lg" />
              ))}
            </div>
          </div>

          {/* Calendar Grid Skeleton */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-170">
              <div className="mb-3 flex justify-between px-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <SkeletonLine key={i} width="w-8" height="h-3" />
                ))}
              </div>
              <div className="flex gap-0.75">
                {Array.from({ length: 52 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-0.75">
                    {Array.from({ length: 7 }).map((_, j) => (
                      <div key={j} className="h-2.75 w-2.75 rounded-xs bg-white/5 animate-pulse" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSkeleton>
  );
}
