
import React from 'react';
import { useBucketList } from '@/contexts/BucketListContext';
import { ItineraryDay, ItineraryActivity } from '@/types/bucketList';

interface ItineraryViewProps {
  experienceId: string;
}

const ItineraryView: React.FC<ItineraryViewProps> = ({ experienceId }) => {
  const { getItinerary } = useBucketList();
  const itinerary = getItinerary(experienceId);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'transportation':
        return '🚗';
      case 'accommodation':
        return '🏨';
      case 'experience':
        return '🎭';
      case 'meal':
        return '🍽️';
      default:
        return '📌';
    }
  };

  return (
    <div className="space-y-6">
      {itinerary.map((day) => (
        <div key={day.date} className="border rounded-lg overflow-hidden">
          <div className="bg-secondary py-2 px-4">
            <h3 className="font-medium">{day.date}</h3>
          </div>
          <div className="divide-y">
            {day.activities.map((activity) => (
              <div key={activity.id} className="p-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium flex items-center gap-2">
                    {getActivityIcon(activity.type)} {activity.title}
                  </span>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItineraryView;
