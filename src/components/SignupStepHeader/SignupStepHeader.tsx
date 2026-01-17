'use client';

import { usePathname } from 'next/navigation';

import { PreviousButton } from '@/components/SignupStepHeader/PreviousButton';
import { Progress } from '@/components/ui/progress';

const STEP_MAP: Record<string, number> = {
  '/sign-up/email': 1,
  '/sign-up/nickname': 2,
  '/sign-up/birth': 3,
  '/sign-up/profile-basic': 4,
  '/sign-up/marital-status': 5,
  '/sign-up/marital-status/children': 5,
  '/sign-up/distance': 6,
  '/sign-up/values/1': 7,
  '/sign-up/values/2': 7,
  '/sign-up/values/3': 7,
  '/sign-up/values/4': 7,
  '/sign-up/profile-image': 8,
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
