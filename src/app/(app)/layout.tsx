// import BottomTabBar from '@/components/BottomTabBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      {/* <BottomTabBar /> */}
    </div>
  );
}
