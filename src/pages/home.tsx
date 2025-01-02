import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  Ban,
  AlertCircle,
  Bell,
  DollarSign,
  ListFilter,
} from 'lucide-react';
import BottomNav from '../components/ui/BottomNav';
import { restaurants } from '@/data/restaurants';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { icon: ListFilter, label: 'All', color: 'text-gray-500' },
    { icon: AlertTriangle, label: 'Critical', color: 'text-red-500' },
    { icon: AlertCircle, label: 'Non-Critical', color: 'text-yellow-500' },
    { icon: Ban, label: 'Closure', color: 'text-purple-500' },
    { icon: Bell, label: 'Warning', color: 'text-blue-500' },
    { icon: DollarSign, label: 'Fine', color: 'text-green-500' },
  ];

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      selectedCategory === 'All' || restaurant.violation === selectedCategory
  );

  return (
    <div className="flex flex-col h-screen bg-background">
      <ScrollArea className="w-full whitespace-nowrap border-b">
        <div className="flex w-max space-x-4 p-4">
          {categories.map((category) => (
            <Button
              key={category.label}
              variant={
                selectedCategory === category.label ? 'secondary' : 'outline'
              }
              className={`inline-flex items-center ${
                selectedCategory === category.label
                  ? 'bg-secondary hover:bg-secondary/80'
                  : ''
              }`}
              onClick={() => setSelectedCategory(category.label)}
            >
              <category.icon
                className={`mr-2 h-4 w-4 ${
                  selectedCategory === category.label
                    ? category.color
                    : category.color
                }`}
              />
              {category.label}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <main className="flex-1 overflow-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">
            {selectedCategory === 'All'
              ? 'Recent Violations'
              : `${selectedCategory} Violations`}
          </h2>
          <div className="space-y-4">
            {filteredRestaurants.map((restaurant, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/restaurant/${index}`)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{restaurant.name}</h3>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      restaurant.severity === 'high'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {restaurant.violation}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {restaurant.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  Reported: {new Date(restaurant.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
