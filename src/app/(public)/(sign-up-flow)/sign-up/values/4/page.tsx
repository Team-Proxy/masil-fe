'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { HobbyCode, SPORTS, CULTURES, MUSIC_TASTES, DAILY_HOBBIES, TRAVEL_HOBBIES } from '@/constants/profile-options';

type HobbyProfile = {
  hobbies: HobbyCode[]; // 최대 8개
};

const MAX_SELECTION = 8;

export default function Home() {
  const [hobbyProfileData, setHobbyProfileData] = useState<HobbyProfile>({
    hobbies: [],
  });

  const selectedCount = Object.values(hobbyProfileData).reduce((count, value) => {
    if (!value) return count;
    return count + (Array.isArray(value) ? value.length : 1);
  }, 0);

  // const toggleSelection = (key: keyof HobbyProfile, value: string) => {
  //   setHobbyProfileData((prev) => {
  //     const current = prev[key];

  //     // 이미 선택된 값 해제
  //     if (current === value) {
  //       return {
  //         ...prev,
  //         [key]: '',
  //       };
  //     }

  //     // 다른 값으로 교체
  //     if (current) {
  //       return {
  //         ...prev,
  //         [key]: value,
  //       };
  //     }

  //     if (selectedCount === MAX_SELECTION) return prev;

  //     return {
  //       ...prev,
  //       [key]: value,
  //     };
  //   });
  // };

  const toggleMultiSelection = (code: HobbyCode) => {
    setHobbyProfileData((prev) => {
      const current = prev.hobbies ?? [];

      if (current.includes(code)) {
        return {
          ...prev,
          hobbies: current.filter((item) => item !== code),
        };
      }

      if (selectedCount === MAX_SELECTION) return prev;

      return {
        ...prev,
        hobbies: [...current, code],
      };
    });
  };

  return (
    <div>
      <h1>평소 여가 시간에 즐기는 활동을 알려주세요.</h1>
      <div className="text-muted-foreground pb-4 text-sm">
        자주 하거나 좋아하는 활동을 골라주세요.
        <br />
        비슷한 관심사를 가진 분을 찾기 위한 질문입니다.
        <p className="text-muted-foreground mt-2 flex justify-between text-xs">
          <span>최대 {MAX_SELECTION}개까지 선택할 수 있습니다.</span>
          <span>(현재 {selectedCount}개)</span>
        </p>
      </div>

      <Separator className="mb-4 h-1!" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">평소에 몸을 움직이는 활동을 즐기시나요?</p>
          <div className="flex flex-wrap gap-2">
            {SPORTS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={hobbyProfileData.hobbies.includes(code) ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleMultiSelection(code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">여가 시간에 문화생활을 즐기는 편이신가요?</p>
          <div className="flex flex-wrap gap-2">
            {CULTURES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={hobbyProfileData.hobbies.includes(code) ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleMultiSelection(code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">평소에 즐겨 듣는 음악은 어떤 종류인가요?</p>
          <div className="flex flex-wrap gap-2">
            {MUSIC_TASTES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={hobbyProfileData.hobbies.includes(code) ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleMultiSelection(code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">일상 속에서 소소하게 즐기는 취미가 있나요?</p>
          <div className="flex flex-wrap gap-2">
            {DAILY_HOBBIES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={hobbyProfileData.hobbies.includes(code) ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleMultiSelection(code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="mb-20 flex flex-col gap-2">
          <p className="font-semibold">여가 시간에 여행이나 나들이를 하시나요?</p>
          <div className="flex flex-wrap gap-2">
            {TRAVEL_HOBBIES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={hobbyProfileData.hobbies.includes(code) ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleMultiSelection(code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/profile-image">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
