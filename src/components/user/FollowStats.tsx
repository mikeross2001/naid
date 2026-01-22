'use client';

interface FollowStatsProps {
  reviewCount: number;
  followersCount: number;
  followingCount: number;
}

export function FollowStats({ reviewCount, followersCount, followingCount }: FollowStatsProps) {
  return (
    <div className="flex items-center gap-6">
      <div>
        <span className="font-bold text-gray-900">{reviewCount}</span>
        <span className="text-gray-500 ml-1">Reviews</span>
      </div>
      <div>
        <span className="font-bold text-gray-900">{followersCount}</span>
        <span className="text-gray-500 ml-1">Followers</span>
      </div>
      <div>
        <span className="font-bold text-gray-900">{followingCount}</span>
        <span className="text-gray-500 ml-1">Following</span>
      </div>
    </div>
  );
}
