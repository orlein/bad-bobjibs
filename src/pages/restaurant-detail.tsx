import {
  ArrowLeft,
  MapPin,
  Calendar,
  AlertCircle,
  ImageIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router';
import { restaurants } from '@/data/restaurants';
import { experiences } from '@/data/experiences';

export default function RestaurantDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const restaurantId = Number(id);
  const restaurant = restaurants[restaurantId];

  // Filter experiences for this specific restaurant
  const restaurantExperiences = experiences.filter(
    (exp) => exp.restaurantId === restaurantId
  );

  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="p-4 flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">{restaurant.name}</h1>
        </div>
      </div>

      <main className="flex-1">
        {/* Restaurant Image */}
        <div className="relative w-full aspect-video bg-muted">
          {(restaurant as any).image ? (
            <img
              src={(restaurant as any).image}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Main Violation Info */}
        <div className="p-4 border-b">
          <div className="mb-4">
            <span
              className={`inline-flex px-3 py-1 rounded-full text-sm ${
                restaurant.severity === 'high'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}
            >
              {restaurant.violation}
            </span>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Restaurant St, City</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                Reported: {new Date(restaurant.date).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Violation Details</h2>
            <p className="text-muted-foreground">{restaurant.description}</p>
          </div>
        </div>

        {/* User Experiences */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">
            User Experiences ({restaurantExperiences.length})
          </h2>
          <div className="space-y-4">
            {restaurantExperiences.length > 0 ? (
              restaurantExperiences.map((experience) => (
                <div key={experience.id} className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{experience.user}</span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(experience.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {experience.content}
                  </p>
                  {experience.photos.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {experience.photos.map((photo, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-muted rounded-md overflow-hidden"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <AlertCircle className="h-6 w-6 text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No user experiences shared yet
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
