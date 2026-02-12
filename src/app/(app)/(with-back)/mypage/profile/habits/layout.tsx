import TopNavBarWithBack from '@/components/layouts/TopNavBarWithBack';
import { HeaderTitleProvider } from '@/providers/headerTitleProvider';

export default function MypageProfileBasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderTitleProvider title="생활 습관 수정">
      <TopNavBarWithBack />
      <main id="scroll-container" className="flex flex-1 flex-col overflow-y-auto px-4">
        <div id="scroll-sentinel" aria-hidden className="h-px" />
        {children}
      </main>
    </HeaderTitleProvider>
  );
}
