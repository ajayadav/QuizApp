
import React, { useState } from 'react';
import { useBucketList } from '@/contexts/BucketListContext';
import { ListFilter } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BucketListItem from '@/components/bucketlist/BucketListItem';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BucketListItem as BucketListItemType } from '@/types/bucketList';
import { Link } from 'react-router-dom';

const BucketList = () => {
  const { bucketList } = useBucketList();
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Filter bucket list items based on selected status
  const filteredItems = bucketList.filter(item => {
    if (statusFilter === 'all') return true;
    return item.status === statusFilter;
  });

  // Count items by status
  const counts = {
    all: bucketList.length,
    planning: bucketList.filter(item => item.status === 'planning').length,
    booked: bucketList.filter(item => item.status === 'booked').length,
    completed: bucketList.filter(item => item.status === 'completed').length,
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Travel Bucket List</h1>
            <p className="text-lg text-muted-foreground">
              Track, plan and organize your dream travel experiences.
            </p>
          </div>
          
          <Button asChild>
            <Link to="/experiences">
              Discover More Experiences
            </Link>
          </Button>
        </div>
        
        <Tabs defaultValue="all" value={statusFilter} onValueChange={setStatusFilter} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ListFilter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filter by status:</span>
          </div>
          <TabsList>
            <TabsTrigger value="all">
              All ({counts.all})
            </TabsTrigger>
            <TabsTrigger value="planning">
              Planning ({counts.planning})
            </TabsTrigger>
            <TabsTrigger value="booked">
              Booked ({counts.booked})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({counts.completed})
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16 border rounded-lg bg-gray-50">
            <h3 className="text-xl font-medium mb-2">Your bucket list is empty</h3>
            <p className="text-muted-foreground mb-6">
              Start by exploring experiences and adding them to your bucket list.
            </p>
            <Button asChild>
              <Link to="/experiences">Explore Experiences</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <BucketListItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BucketList;
