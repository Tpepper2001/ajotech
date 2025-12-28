
import React from 'react';

interface TrustScoreBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export const TrustScoreBadge: React.FC<TrustScoreBadgeProps> = ({ score, size = 'md' }) => {
  let colorClass = 'bg-red-100 text-red-700';
  let label = 'Poor';

  if (score >= 80) {
    colorClass = 'bg-green-100 text-green-700';
    label = 'Excellent';
  } else if (score >= 60) {
    colorClass = 'bg-yellow-100 text-yellow-700';
    label = 'Good';
  } else if (score >= 40) {
    colorClass = 'bg-orange-100 text-orange-700';
    label = 'Fair';
  }

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-4 py-2 font-bold'
  };

  return (
    <div className={`inline-flex items-center gap-1 rounded-full ${colorClass} ${sizeClasses[size]} font-semibold`}>
      <span className="w-2 h-2 rounded-full bg-current"></span>
      {score} - {label}
    </div>
  );
};
