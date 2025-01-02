import { SearchIcon, MapPin, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BottomNav from '../components/ui/BottomNav';
import { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { restaurants } from '@/data/restaurants';

// Define center of the map (you can adjust these coordinates)
const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function SearchMap() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  // Load Google Maps Script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // You'll need to add this to your .env file
  });

  // Optional: Save map instance for later use
  const onMapLoad = useCallback((map: google.maps.Map) => {
    // You can save the map instance here if needed
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1">
        <div className="p-4 sticky top-0 bg-background z-10">
          <div className="relative mb-2">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for restaurants..."
              className="pl-10"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('map')}
            >
              <MapPin className="h-4 w-4 mr-1" />
              Map
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4 mr-1" />
              List
            </Button>
          </div>
        </div>

        {viewMode === 'map' ? (
          <div className="flex-1 h-[calc(100vh-180px)]">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={13}
              center={defaultCenter}
              options={options}
              onLoad={onMapLoad}
            >
              {/* Add markers for each restaurant */}
              {restaurants.map((restaurant, index) => (
                <Marker
                  key={index}
                  position={{
                    lat: (restaurant as any).lat || defaultCenter.lat,
                    lng: (restaurant as any).lng || defaultCenter.lng,
                  }}
                  // Optional: Add custom icon based on violation type
                  // icon={{
                  //   url: getMarkerIcon(restaurant.violation),
                  //   scaledSize: new window.google.maps.Size(30, 30),
                  // }}
                />
              ))}
            </GoogleMap>
          </div>
        ) : (
          <div className="p-4">
            {/* Search Results List will go here */}
            <div className="space-y-4">
              {restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
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
                  <p className="text-sm text-muted-foreground">
                    {restaurant.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
