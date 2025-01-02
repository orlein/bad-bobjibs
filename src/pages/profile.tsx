import LoginUserProfile from '@/components/login-user-profile';
import LogoutUser from '@/components/logout-user';
import RecentReviews from '@/components/recent-reviews';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">유저 프로필</h2>
        <ThemeToggle />
      </div>
      <LogoutUser />
      <LoginUserProfile />
      <RecentReviews />
    </div>
  );
}
