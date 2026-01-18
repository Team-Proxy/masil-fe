import { ChevronLeftIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const PREV_STEP: Record<string, string> = {
  '/sign-up/email': '/',
  '/sign-up/nickname': '/sign-up/email',
  '/sign-up/birth': '/sign-up/nickname',
  '/sign-up/gender': '/sign-up/birth',
  '/sign-up/marital-status': '/sign-up/gender',
  '/sign-up/marital-status/children': '/sign-up/marital-status',
  '/sign-up/distance': '/sign-up/marital-status',
  '/sign-up/values/1': '/sign-up/distance',
  '/sign-up/values/2': '/sign-up/values/1',
  '/sign-up/values/3': '/sign-up/values/2',
  '/sign-up/values/4': '/sign-up/values/3',
};

export function PreviousButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handlePrevious = () => {
    const prevPath = PREV_STEP[pathname];

    if (prevPath) {
      router.push(prevPath);
      return;
    }

    router.back();
  };

  return (
    <button type="button" onClick={handlePrevious} className="cursor-pointer">
      <ChevronLeftIcon className="h-8 w-8" />
    </button>
  );
}
