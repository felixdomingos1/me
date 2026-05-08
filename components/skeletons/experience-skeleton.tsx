'use client';

import { SkeletonLine, SkeletonCircle } from './base-skeleton';

export function ExperienceSkeleton() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-neon/20 bg-primary-neon/10 px-4 py-2 mb-5">
            <SkeletonCircle size="w-4 h-4" />
            <SkeletonLine width="w-32" height="h-3" />
          </div>
          <SkeletonLine width="w-64" height="h-10" className="mx-auto mb-4" />
          <SkeletonLine width="w-20" height="h-1" className="mx-auto" />
          <SkeletonLine width="w-96" height="h-4" className="mx-auto mt-6" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/3 p-5 text-center">
              <SkeletonCircle size="w-8 h-8" className="mx-auto mb-3" />
              <SkeletonLine width="w-20" height="h-8" className="mx-auto mb-1" />
              <SkeletonLine width="w-16" height="h-3" className="mx-auto" />
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="relative flex mb-8">
              <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-20">
                <SkeletonCircle size="w-12 h-12" />
              </div>
              <div className={`w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/4 to-white/2 p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <SkeletonLine width="w-48" height="h-6" />
                        <SkeletonLine width="w-16" height="h-5" className="rounded-full" />
                      </div>
                      <SkeletonLine width="w-32" height="h-4" className="mb-3" />
                      <div className="flex gap-3">
                        <SkeletonLine width="w-24" height="h-3" />
                        <SkeletonLine width="w-24" height="h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {[1, 2, 3, 4].map((j) => (
                      <SkeletonLine key={j} width="w-20" height="h-7" className="rounded-lg" />
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-5 rounded-2xl border border-white/5 bg-black/20 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <SkeletonCircle size="w-4 h-4" />
                      <SkeletonLine width="w-40" height="h-3" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[1, 2].map((j) => (
                        <div key={j} className="flex items-start gap-2">
                          <SkeletonLine width="w-4" height="h-4" />
                          <SkeletonLine width="w-32" height="h-3" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="flex items-start gap-2">
                        <SkeletonLine width="w-3" height="h-3" />
                        <SkeletonLine width="w-48" height="h-3" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
