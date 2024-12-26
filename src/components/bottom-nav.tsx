import { Link } from 'react-router';
import { HomeIcon, MapPinIcon, SearchIcon, UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: HomeIcon, label: 'Home', href: '/' },
  { icon: MapPinIcon, label: 'Map', href: '/map' },
  { icon: SearchIcon, label: 'Search', href: '/search' },
  { icon: UserIcon, label: 'Profile', href: '/profile' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t mx-auto max-w-screen-md">
      <div className="container flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-primary',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:ring-offset-background'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
