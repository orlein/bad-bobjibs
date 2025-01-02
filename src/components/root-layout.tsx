import { Outlet } from 'react-router';
import BottomNav from './bottom-nav';
import Header from './header';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground max-w-screen-md mx-auto shadow-2xl border">
      <Header />
      <main className="flex-grow overflow-y-auto pb-20 p-6">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
