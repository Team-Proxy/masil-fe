import BottomNavBar from '@/components/layouts/BottomNavBar';
import TopNavBarWithLogo from '@/components/layouts/TopNavBarWithLogo';

export default function WithLogoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      <TopNavBarWithLogo />
      <main className="flex flex-1 flex-col overflow-y-auto">{children}</main>
      <BottomNavBar />
    </div>
  );
}
