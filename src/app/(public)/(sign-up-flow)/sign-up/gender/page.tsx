'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

  return (
    <div>
      <h1 className="pb-6">성별을 선택해 주세요.</h1>
      <p className="text-muted-foreground pb-4 text-sm">서비스 이용을 위한 기본 정보입니다.</p>
      <div className="flex flex-col gap-4">
        <Button
          type="button"
          variant="outline"
          className={cn(
            'border-muted ring-border w-full ring-1',
            gender === 'male' && 'border-primary text-primary ring-primary',
          )}
          onClick={() => setGender('male')}
        >
          남성
        </Button>
        <Button
          type="button"
          variant="outline"
          className={cn(
            'border-muted ring-border w-full ring-1',
            gender === 'female' && 'border-primary text-primary ring-primary',
          )}
          onClick={() => setGender('female')}
        >
          여성
        </Button>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/marital-status">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
