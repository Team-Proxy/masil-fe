import { ChevronLeftIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const PREV_STEP: Record<string, string> = {
  '/signup/email': '/',
  '/signup/nickname': '/signup/email',
  '/signup/birth': '/signup/nickname',
  '/signup/gender': '/signup/birth',
  '/signup/marital-status': '/signup/gender',
  '/signup/marital-status/children': '/signup/marital-status',
  '/signup/distance': '/signup/marital-status',
  '/signup/values/1': '/signup/distance',
  '/signup/values/2': '/signup/values/1',
  '/signup/values/3': '/signup/values/2',
  '/signup/values/4': '/signup/values/3',
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
