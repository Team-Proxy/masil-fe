import BottomNavBar from '@/components/layouts/BottomNavBar';

export default function WithBackLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      <main className="flex flex-1 flex-col overflow-y-auto">{children}</main>
      <BottomNavBar />
    </div>
  );
}
