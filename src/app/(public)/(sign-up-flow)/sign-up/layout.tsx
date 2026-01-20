import { SignupStepHeader } from '@/components/SignupStepHeader/SignupStepHeader';

export default async function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignupStepHeader />
      <div className="p-4">{children}</div>
    </>
  );
}
