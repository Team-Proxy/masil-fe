import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import TopNavBar from '@/components/TopNavBar/TopNavBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      <TopNavBar />
      <main className="flex-1 overflow-y-auto px-4 pb-4">{children}</main>
      <BottomNavBar />
    </div>
  );
}
