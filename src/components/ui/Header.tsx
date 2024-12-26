import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Button variant="ghost" size="icon" className="mr-2">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
        <h1 className="text-lg font-semibold">Bad Bobjibs</h1>
      </div>
    </header>
  );
}

