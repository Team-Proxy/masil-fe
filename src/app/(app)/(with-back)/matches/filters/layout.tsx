import TopNavBarWithBack from '@/components/layouts/TopNavBarWithBack';
import { HeaderTitleProvider } from '@/providers/headerTitleProvider';

export default function MatchFiltersLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderTitleProvider title="인연 찾기 설정">
      <TopNavBarWithBack />
      <main id="scroll-container" className="flex flex-1 flex-col overflow-y-auto">
        <div id="scroll-sentinel" aria-hidden className="h-px" />
        {children}
      </main>
    </HeaderTitleProvider>
  );
}
