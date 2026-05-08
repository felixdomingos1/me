'use client';

import { BaseSkeleton, SkeletonLine, SkeletonCircle } from './base-skeleton';

export function AboutSkeleton() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SkeletonLine width="w-48" height="h-8" className="mx-auto mb-3" />
          <SkeletonLine width="w-20" height="h-1" className="mx-auto" />
          <SkeletonLine width="w-96" height="h-4" className="mx-auto mt-4" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <SkeletonCircle size="w-8 h-8" className="mx-auto mb-2" />
              <SkeletonLine width="w-16" height="h-6" className="mx-auto mb-1" />
              <SkeletonLine width="w-20" height="h-3" className="mx-auto" />
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <SkeletonCircle size="w-6 h-6" />
                  <SkeletonLine width="w-32" height="h-6" />
                </div>
                <SkeletonLine width="w-full" height="h-4" className="mb-2" />
                <SkeletonLine width="w-full" height="h-4" className="mb-2" />
                <SkeletonLine width="w-3/4" height="h-4" />
              </div>
            ))}
          </div>

          {/* Right Side - Skills */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <SkeletonCircle size="w-6 h-6" />
              <SkeletonLine width="w-40" height="h-6" />
            </div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <SkeletonCircle size="w-5 h-5" />
                    <SkeletonLine width="w-24" height="h-4" />
                  </div>
                  <SkeletonLine width="w-12" height="h-4" />
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-white/20 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
