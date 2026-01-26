import TopNavBarWithBack from '@/components/layouts/TopNavBarWithBack';
import { HeaderTitleProvider } from '@/providers/headerTitleProvider';

interface ChatLayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function ChatLayout({ children, params }: ChatLayoutProps) {
  const { id } = await params;
  return (
    <HeaderTitleProvider title={id}>
      <TopNavBarWithBack />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
    </HeaderTitleProvider>
  );
}
