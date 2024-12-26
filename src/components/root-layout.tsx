import { Outlet } from 'react-router';
import Header from './header';
import BottomNav from './bottom-nav';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground mx-auto max-w-screen-md shadow-slate-900 shadow-sm">
      <Header />
      <main className="flex-grow overflow-y-auto pb-16">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
