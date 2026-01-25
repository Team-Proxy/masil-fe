import BottomNavBar from '@/components/layouts/BottomNavBar';
import TopNavBarWithLogo from '@/components/layouts/TopNavBarWithLogo';

export default function WithLogoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      <main className="flex flex-1 flex-col overflow-y-auto">
        <TopNavBarWithLogo />
        <section className="flex-1 pb-4">{children}</section>
      </main>
      <BottomNavBar />
    </div>
  );
}
