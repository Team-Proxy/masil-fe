import { CheckCircle2Icon } from 'lucide-react';
import Link from 'next/link';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="bg-primary/10 mb-6 flex h-24 w-24 items-center justify-center rounded-full">
        <CheckCircle2Icon className="text-primary h-14 w-14" strokeWidth={1.5} />
      </div>
      <h1 className="mb-3 text-xl font-semibold">회원가입을 완료했습니다.</h1>

      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
        이제 모든 준비가 끝났습니다.
        <br />
        홈에서 새로운 인연을 만나보세요.
      </p>

      <KeyboardAwareButton>
        <Link href="/">
          <Button className="w-full">홈으로 가기</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
