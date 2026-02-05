'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function Page() {
  const [distance, setDistance] = useState<number>(10);

  return (
    <div>
      <h1 className="pb-6">만날 수 있는 상대와의 거리를 설정해 주세요.</h1>
      <p className="text-muted-foreground pb-4 text-sm">슬라이더를 움직여 상대와의 최대 거리를 설정해 주세요.</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>상대와의 거리</span>
          <span>{distance}km</span>
        </div>
        <Slider
          defaultValue={[distance]}
          max={100}
          step={1}
          className="w-full"
          onValueChange={(value) => {
            setDistance(value[0]);
          }}
        />
      </div>
      <KeyboardAwareButton>
        <Link href="/signup/values/1">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
