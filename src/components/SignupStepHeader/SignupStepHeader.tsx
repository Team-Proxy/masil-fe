'use client';

import { usePathname } from 'next/navigation';

import { PreviousButton } from '@/components/SignupStepHeader/PreviousButton';
import { Progress } from '@/components/ui/progress';

const STEP_MAP: Record<string, number> = {
  '/signup/email': 1,
  '/signup/nickname': 2,
  '/signup/birth': 3,
  '/signup/gender': 4,
  '/signup/marital-status': 5,
  '/signup/marital-status/children': 5,
  '/signup/distance': 6,
  '/signup/values/1': 7,
  '/signup/values/2': 7,
  '/signup/values/3': 7,
  '/signup/values/4': 7,
  '/signup/profile-image': 8,
};

export function SignupStepHeader() {
  const pathname = usePathname();
  const currentStep = STEP_MAP[pathname] || 0;
  const totalStep = 8;

  return (
    <div>
      <Progress value={(currentStep / totalStep) * 100} className="rounded-none" />
      <div className="text-muted-foreground flex items-center justify-between">
        <span>
          <PreviousButton />
        </span>
        <span className="pr-3">
          {currentStep} / {totalStep}
        </span>
      </div>
    </div>
  );
}
