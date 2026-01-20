'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  const [maritalStatus, setMaritalStatus] = useState<'single' | 'married' | null>(null);

  return (
    <div>
      <h1 className="pb-6">결혼 여부를 선택해 주세요.</h1>
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
            maritalStatus === 'single' && 'border-primary text-primary ring-primary',
          )}
          onClick={() => setMaritalStatus('single')}
        >
          싱글
        </Button>
        <Button
          type="button"
          variant="outline"
          className={cn(
            'border-muted ring-border w-full ring-1',
            maritalStatus === 'married' && 'border-primary text-primary ring-primary',
          )}
          onClick={() => setMaritalStatus('married')}
        >
          돌싱
        </Button>
      </div>
      <KeyboardAwareButton>
        <Link href={maritalStatus === 'single' ? `/sign-up/distance` : `/sign-up/marital-status/children`}>
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
