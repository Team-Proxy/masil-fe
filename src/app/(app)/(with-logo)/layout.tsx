import BottomNavBar from '@/components/layouts/BottomNavBar';
import TopNavBarWithLogo from '@/components/layouts/TopNavBarWithLogo';

export default function WithLogoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      <TopNavBarWithLogo />
      <main id="scroll-container" className="flex flex-1 flex-col overflow-y-auto">
        <div id="scroll-sentinel" aria-hidden className="h-px" />
        {children}
      </main>
      <BottomNavBar />
    </div>
  );
}
