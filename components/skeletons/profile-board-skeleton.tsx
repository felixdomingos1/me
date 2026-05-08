'use client';

import { BaseSkeleton, SkeletonLine, SkeletonCircle } from './base-skeleton';

export function ProfileBoardSkeleton() {
  return (
    <BaseSkeleton className="rounded-3xl">
      {/* Cover */}
      <div className="h-52 sm:h-60 md:h-72 bg-white/5 animate-pulse" />

      {/* Avatar */}
      <div className="flex justify-center -mt-20 sm:-mt-24 md:-mt-28 mb-4">
        <SkeletonCircle size="h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56" className="border-4 border-black" />
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 pb-8 sm:pb-10 pt-8 text-center">
        <SkeletonLine width="w-48" height="h-8" className="mx-auto mb-2" />
        <SkeletonLine width="w-40" height="h-4" className="mx-auto mb-3" />
        <SkeletonLine width="w-32" height="h-3" className="mx-auto mb-6" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <SkeletonLine width="w-6" height="h-6" className="mx-auto mb-2" />
              <SkeletonLine width="w-16" height="h-5" className="mx-auto mb-1" />
              <SkeletonLine width="w-12" height="h-3" className="mx-auto" />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <SkeletonLine width="w-full sm:w-32" height="h-11" className="rounded-xl" />
          <SkeletonCircle size="w-11 h-11" />
          <SkeletonCircle size="w-11 h-11" />
        </div>
      </div>
    </BaseSkeleton>
  );
}
