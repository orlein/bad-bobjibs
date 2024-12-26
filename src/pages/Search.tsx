import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import BottomNav from '../components/ui/BottomNav';

export default function Search() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Search Restaurants</h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for restaurants..."
            className="pl-10"
          />
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>Search results will appear here.</p>
          <p>
            Implement search functionality based on restaurant names or
            violation types.
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
