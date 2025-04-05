
import React from 'react';
import { useBucketList } from '@/contexts/BucketListContext';
import { PlanningTip } from '@/types/bucketList';

interface PlanningTipsProps {
  experienceId: string;
}

const PlanningTips: React.FC<PlanningTipsProps> = ({ experienceId }) => {
  const { getPlanningTips } = useBucketList();
  const tips = getPlanningTips(experienceId);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'preparation':
        return '🧳';
      case 'budget':
        return '💰';
      case 'time':
        return '⏱️';
      case 'local-info':
        return '🌐';
      default:
        return '📝';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'preparation':
        return 'Preparation';
      case 'budget':
        return 'Budget';
      case 'time':
        return 'Timing';
      case 'local-info':
        return 'Local Info';
      default:
        return 'Other';
    }
  };

  return (
    <div className="space-y-4">
      {tips.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No planning tips available for this experience yet.</p>
        </div>
      ) : (
        tips.map((tip) => (
          <div key={tip.id} className="border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">{getCategoryIcon(tip.category)}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{tip.title}</h4>
                  <span className="text-xs px-2 py-0.5 bg-secondary rounded-full">
                    {getCategoryLabel(tip.category)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PlanningTips;
