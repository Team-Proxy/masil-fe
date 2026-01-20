'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function Home() {
  const [children, setChildren] = useState<'yes' | 'no' | null>(null);

  return (
    <div>
      <h1 className="pb-6">자녀가 있나요?</h1>
      <p className="text-muted-foreground pb-4 text-sm">
        더 적합한 추천을 위해 필요한 정보입니다.
        <br />
        해당 정보는 프로필에 공개되지 않습니다.
      </p>
      <div className="flex flex-col gap-4">
        <Button
          type="button"
          variant="outline"
          className={cn(
            'border-muted ring-border w-full ring-1',
            children === 'yes' && 'border-primary text-primary ring-primary',
          )}
          onClick={() => setChildren('yes')}
        >
          예
        </Button>
        {children === 'yes' && (
          <div>
            <p className="text-muted-foreground text-sm">현재 함께 지내고 있는 자녀 수를 알려주세요.</p>
            <Input type="number" placeholder="자녀 수를 입력하세요" className="mt-1 w-full" />
          </div>
        )}

        <Button
          type="button"
          variant="outline"
          className={cn(
            'border-muted ring-border w-full ring-1',
            children === 'no' && 'border-primary text-primary ring-primary',
          )}
          onClick={() => setChildren('no')}
        >
          아니오
        </Button>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/distance">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
