import Link from 'next/link';

import { KeyboardAwareButton } from '@/components/keyboard-aware-button/KeyboardAwareButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div>
      <h1 className="pb-6">넥네임을 설정해 주세요.</h1>
      <p className="text-muted-foreground pb-4 text-sm">
        프로필에 표시되는 닉네임입니다.
        <br />
        저장 후에는 변경할 수 없습니다.
      </p>
      <div className="flex gap-2">
        <Input type="text" placeholder="닉네임 입력하세요" />
        <Button>중복 확인</Button>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/birth">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
