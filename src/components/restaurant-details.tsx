import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Restaurant {
  id: string;
  name: string;
  rating: number;
  description: string;
}

interface RestaurantDetailsProps {
  restaurant: Restaurant | null;
  onClose: () => void;
}

export function RestaurantDetails({
  restaurant,
  onClose,
}: RestaurantDetailsProps) {
  if (!restaurant) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end justify-center sm:items-center p-4">
      <div className="bg-card w-full max-w-lg rounded-t-xl sm:rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{restaurant.name}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <p className="text-muted-foreground mb-2">
            Rating: {restaurant.rating}/5
          </p>
          <p>{restaurant.description}</p>
        </div>
        <div className="bg-muted p-4">
          <Button className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
