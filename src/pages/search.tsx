import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Search Bad Restaurants</h2>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search bad restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">
          <SearchIcon className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-muted-foreground">
          Search results will appear here.
        </p>
      </div>
    </div>
  );
}
