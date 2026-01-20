import Link from 'next/link';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">이메일</Label>
          <div className="flex gap-2">
            <Input id="email" type="email" placeholder="이메일을 입력하세요" className="flex-1" />
            <Button type="button" size="sm" className="h-9 w-25">
              인증번호 발송
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="code">인증번호</Label>
          <div className="flex items-center gap-2">
            <Input id="code" placeholder="인증번호 6자리" className="flex-1" />
            <Button size="sm" className="h-9 w-25">
              확인
            </Button>
          </div>
          <div className="flex justify-between">
            <span className="text-destructive text-sm">2:59</span>
            <button type="button" className="text-xs underline underline-offset-2">
              인증번호 재전송
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">비밀번호</Label>
          <div className="flex gap-2">
            <Input id="password" type="password" placeholder="비밀번호를 입력하세요" className="flex-1" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
          <div className="flex gap-2">
            <Input id="passwordConfirm" type="password" placeholder="비밀번호를 다시 입력하세요" className="flex-1" />
          </div>
        </div>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/nickname">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
