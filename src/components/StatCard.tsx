
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="stat-card animate-slide-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-4xl font-bold text-cropdoc-green mb-1">{value}</h3>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default StatCard;
