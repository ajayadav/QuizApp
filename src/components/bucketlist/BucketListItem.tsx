
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, ListCheck, Route } from 'lucide-react';
import { BucketListItem as BucketListItemType } from '@/types/bucketList';
import { useBucketList } from '@/contexts/BucketListContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ItineraryView from './ItineraryView';
import PlanningTips from './PlanningTips';

interface BucketListItemProps {
  item: BucketListItemType;
}

const BucketListItem: React.FC<BucketListItemProps> = ({ item }) => {
  const { removeFromBucketList, updateBucketListItem } = useBucketList();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    item.tentativeDate ? new Date(item.tentativeDate) : undefined
  );

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      updateBucketListItem(item.id, { 
        tentativeDate: format(date, 'yyyy-MM-dd') 
      });
    }
  };

  const handleStatusChange = (status: 'planning' | 'booked' | 'completed') => {
    updateBucketListItem(item.id, { status });
  };

  return (
    <Card className="h-full">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 m-2">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
            {item.status === 'planning' && 'Planning'}
            {item.status === 'booked' && 'Booked'}
            {item.status === 'completed' && 'Completed'}
          </div>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
        
        <div className="flex items-center gap-2 text-sm mb-3">
          <span className="inline-flex items-center gap-1">
            <CalendarIcon className="w-4 h-4 text-accent" />
            {item.tentativeDate 
              ? format(new Date(item.tentativeDate), 'MMM dd, yyyy')
              : 'No date set'}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2 pt-0">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Set Date
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Route className="w-4 h-4 mr-2" />
              View Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{item.title} - Travel Plan</DialogTitle>
            </DialogHeader>
            
            <Tabs defaultValue="itinerary" className="mt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="itinerary">Suggested Itinerary</TabsTrigger>
                <TabsTrigger value="tips">Planning Tips</TabsTrigger>
              </TabsList>
              
              <TabsContent value="itinerary" className="mt-4">
                <ItineraryView experienceId={item.experienceId} />
              </TabsContent>
              
              <TabsContent value="tips" className="mt-4">
                <PlanningTips experienceId={item.experienceId} />
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex justify-between gap-2">
              <div className="flex gap-2">
                <Button 
                  variant={item.status === 'planning' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handleStatusChange('planning')}
                >
                  Planning
                </Button>
                <Button 
                  variant={item.status === 'booked' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handleStatusChange('booked')}
                >
                  Booked
                </Button>
                <Button 
                  variant={item.status === 'completed' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => handleStatusChange('completed')}
                >
                  Completed
                </Button>
              </div>
              
              <Button 
                variant="destructive" 
                size="sm"
                onClick={() => removeFromBucketList(item.id)}
              >
                Remove
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default BucketListItem;
