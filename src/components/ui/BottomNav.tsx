import { Home, Search, PenSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: PenSquare, label: 'Report', path: '/report' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="border-t bg-background">
      <nav className="flex justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-4 ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
