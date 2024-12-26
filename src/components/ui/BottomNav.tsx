import { Home, Map, Search, User } from 'lucide-react';
import { Link } from 'react-router';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className="flex flex-col items-center text-muted-foreground"
        >
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/map"
          className="flex flex-col items-center text-muted-foreground"
        >
          <Map className="h-6 w-6" />
          <span className="text-xs">Map</span>
        </Link>
        <Link
          to="/search"
          className="flex flex-col items-center text-muted-foreground"
        >
          <Search className="h-6 w-6" />
          <span className="text-xs">Search</span>
        </Link>
        <Link
          to="/profile"
          className="flex flex-col items-center text-muted-foreground"
        >
          <User className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
