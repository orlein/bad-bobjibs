import { Outlet } from 'react-router';
import Header from './Header';
import BottomNav from './BottomNav';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow overflow-y-auto pb-16">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
