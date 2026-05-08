'use client';

import { ProfileBoardSkeleton } from './profile-board-skeleton';
import { ReadmeSkeleton } from './readme-skeleton';

export function HomeSkeleton() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] 2xl:grid-cols-[420px_minmax(0,1fr)] items-start">
          {/* Left */}
          <div className="w-full">
            <ProfileBoardSkeleton />
          </div>

          {/* Right */}
          <div className="min-w-0 w-full overflow-hidden">
            <ReadmeSkeleton />
          </div>
        </div>
      </div>
    </section>
  );
}
