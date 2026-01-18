import { CircleUserRoundIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1 className="pb-6">최근에 찍은 사진을 추가하세요.</h1>
      <p className="text-muted-foreground pb-4 text-sm">
        프로필에 표시되는 사진입니다.
        <br />
        나를 잘 나타낼 수 있는 사진을 선택해 주세요.
      </p>
      <div className="mb-10 flex justify-center">
        <button type="button" className="bg-muted relative flex h-32 w-32 items-center justify-center rounded-full">
          <CircleUserRoundIcon size={200} strokeWidth={1} className="text-muted-foreground" />

          <span className="bg-primary text-primary-foreground absolute right-1 bottom-1 flex h-8 w-8 items-center justify-center rounded-full">
            <PlusIcon size={16} strokeWidth={2} />
          </span>
        </button>
      </div>

      <KeyboardAwareButton>
        <Link href="/sign-up/end">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
