import TopNavBarWithBack from '@/components/layouts/TopNavBarWithBack';

interface ChatLayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function ChatLayout({ children, params }: ChatLayoutProps) {
  const { id } = await params;
  return (
    <>
      <TopNavBarWithBack title={id} />
      <section className="flex-1 px-4 pb-4">{children}</section>
    </>
  );
}
