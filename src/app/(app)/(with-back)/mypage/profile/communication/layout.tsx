import TopNavBarWithBack from '@/components/layouts/TopNavBarWithBack';
import { HeaderTitleProvider } from '@/providers/headerTitleProvider';

export default function MypageProfileBasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderTitleProvider title="커뮤니케이션 성향 수정">
      <TopNavBarWithBack />
      <main id="scroll-container" className="flex flex-1 flex-col overflow-y-auto px-4">
        <div id="scroll-sentinel" aria-hidden className="h-px" />
        {children}
      </main>
    </HeaderTitleProvider>
  );
}
