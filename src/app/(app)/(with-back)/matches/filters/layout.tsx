import TopNavBarWithBack from '@/components/layouts/TopNavBarWithBack';

export default function MatchFiltersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavBarWithBack title="인연 찾기 설정" />
      <section className="flex-1 p-4">{children}</section>
    </>
  );
}
