import Link from 'next/link';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

export default function Home() {
  return (
    <div>
      <h1 className="pb-6">생년월일을 입력해 주세요.</h1>
      <p className="text-muted-foreground pb-4 text-sm">
        프로필에는 생일이 아닌 만나이가 표시됩니다.
        <br />
        예) 1990 / 01 / 01
      </p>
      <div className="w-full">
        <InputOTP maxLength={8}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="h-8 w-8" />
            <InputOTPSlot index={1} className="h-8 w-8" />
            <InputOTPSlot index={2} className="h-8 w-8" />
            <InputOTPSlot index={3} className="h-8 w-8" />
          </InputOTPGroup>
          <span className="text-muted-foreground px-1">/</span>
          <InputOTPGroup>
            <InputOTPSlot index={4} className="h-8 w-8" />
            <InputOTPSlot index={5} className="h-8 w-8" />
          </InputOTPGroup>
          <span className="text-muted-foreground px-1">/</span>
          <InputOTPGroup>
            <InputOTPSlot index={6} className="h-8 w-8" />
            <InputOTPSlot index={7} className="h-8 w-8" />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/gender">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
