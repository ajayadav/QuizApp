
export interface BucketListItem {
  id: string;
  experienceId: string;
  title: string;
  location: string;
  category: string;
  image: string;
  tentativeDate?: string;
  status: 'planning' | 'booked' | 'completed';
  notes?: string;
}

export interface ItineraryDay {
  date: string;
  activities: ItineraryActivity[];
}

export interface ItineraryActivity {
  id: string;
  title: string;
  time: string;
  description: string;
  type: 'transportation' | 'accommodation' | 'experience' | 'meal' | 'other';
}

export interface PlanningTip {
  id: string;
  experienceId: string;
  title: string;
  description: string;
  category: 'preparation' | 'budget' | 'time' | 'local-info' | 'other';
}
