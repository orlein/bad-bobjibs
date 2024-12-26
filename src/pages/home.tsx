import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertTriangle } from 'lucide-react';
import BottomNav from '../components/ui/BottomNav';

interface Restaurant {
  id: number;
  name: string;
  violation: string;
  date: string;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Greasy Spoon Diner',
    violation: 'Unsanitary food preparation',
    date: '2023-12-15',
  },
  {
    id: 2,
    name: 'Sketchy Sushi',
    violation: 'Improper food storage',
    date: '2024-01-03',
  },
  {
    id: 3,
    name: 'Questionable Quesadillas',
    violation: 'Pest infestation',
    date: '2024-01-10',
  },
  {
    id: 4,
    name: 'Dubious Donuts',
    violation: 'Expired ingredients',
    date: '2024-01-18',
  },
  {
    id: 5,
    name: 'Risky Ramen',
    violation: 'Cross-contamination',
    date: '2024-01-25',
  },
];

export default function Home() {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Bad Bobjibs</h1>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="mb-4 cursor-pointer"
              onClick={() => setSelectedRestaurant(restaurant)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                <CardDescription>{restaurant.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-yellow-500">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  <span>{restaurant.violation}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </main>
      <BottomNav />
    </div>
  );
}
