import BottomNavBar from '@/components/layouts/BottomNavBar';

export default function WithBackLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      {children}
      <BottomNavBar />
    </div>
  );
}
