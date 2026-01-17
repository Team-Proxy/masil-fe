import { ProgressBar } from '@/components/progress-bar/ProgressBar';

export default async function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar />
      <div className="p-4">{children}</div>
    </>
  );
}
