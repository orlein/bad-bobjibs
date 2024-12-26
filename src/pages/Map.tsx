import { MapPin } from 'lucide-react';
import BottomNav from '../components/ui/BottomNav';

export default function Map() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 p-4 flex flex-col items-center justify-center">
        <MapPin className="h-24 w-24 text-primary mb-4" />
        <h1 className="text-2xl font-bold mb-2">Restaurant Map</h1>
        <p className="text-center text-muted-foreground">
          This page will show a map of restaurants with violations. Integration
          with a mapping service is required.
        </p>
      </main>
      <BottomNav />
    </div>
  );
}
