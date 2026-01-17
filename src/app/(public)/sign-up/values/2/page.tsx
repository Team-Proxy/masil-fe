'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  LIFE_RHYTHMS,
  MEAL_PREFERENCES,
  SPENDING_STYLES,
  TRAVEL_STYLES,
  LIVING_TYPES,
  FAMILY_DISTANCES,
} from '@/constants/profile-options';

type LifestyleProfile = {
  lifeRhythm?: string;
  mealPreference?: string;
  spendingStyle?: string;
  travelStyles?: string[];
  livingType?: string;
  familyDistance?: string;
};

export default function Home() {
  const [lifestyleProfileData, setLifestyleProfileData] = useState<LifestyleProfile>({
    lifeRhythm: '',
    mealPreference: '',
    spendingStyle: '',
    travelStyles: [],
    livingType: '',
    familyDistance: '',
  });

  const selectedCount = Object.values(lifestyleProfileData).reduce((count, value) => {
    if (!value) return count;
    return count + (Array.isArray(value) ? value.length : 1);
  }, 0);

  const toggleSelection = (key: keyof LifestyleProfile, value: string) => {
    setLifestyleProfileData((prev) => {
      const current = prev[key];

      console.log(current);
      console.log(selectedCount);

      // 이미 선택된 값 해제
      if (current === value) {
        return {
          ...prev,
          [key]: '',
        };
      }

      // 다른 값으로 교체
      if (current) {
        return {
          ...prev,
          [key]: value,
        };
      }

      if (selectedCount === 8) return prev;

      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const toggleTravelStyleSelection = (value: string) => {
    setLifestyleProfileData((prev) => {
      const current = prev.travelStyles ?? [];

      if (current.includes(value)) {
        return {
          ...prev,
          travelStyles: current.filter((item) => item !== value),
        };
      }

      if (selectedCount === 8) return prev;

      return {
        ...prev,
        travelStyles: [...current, value],
      };
    });
  };

  return (
    <div>
      <h1 className="pb-6">일상과 가치관에 대해 조금 더 알려주세요.</h1>
      <div className="text-muted-foreground pb-4 text-sm">
        함께 지낼 때 중요한 생활 습관과 기준입니다.
        <br />
        정확하지 않아도 괜찮고, 편하게 선택해 주세요.
        <p className="text-muted-foreground mt-2 flex justify-between text-xs">
          <span>최대 8개까지 선택할 수 있습니다.</span>
          <span>(현재 {selectedCount}개)</span>
        </p>
      </div>

      <Separator className="mb-4 h-1!" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">하루 생활 리듬은 어떤 편인가요?</p>
          <div className="flex flex-wrap gap-2">
            {LIFE_RHYTHMS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={lifestyleProfileData.lifeRhythm === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('lifeRhythm', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">평소 식사는 어떤 방식을 더 선호하시나요?</p>
          <div className="flex flex-wrap gap-2">
            {MEAL_PREFERENCES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={lifestyleProfileData.mealPreference === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('mealPreference', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">돈을 쓰는 스타일은 어디에 가까운가요?</p>
          <div className="flex flex-wrap gap-2">
            {SPENDING_STYLES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={lifestyleProfileData.spendingStyle === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('spendingStyle', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">여행을 간다면 어떤 스타일이 편한가요?</p>
            <p className="text-muted-foreground text-xs">여러 개 선택 가능합니다.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {TRAVEL_STYLES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={lifestyleProfileData.travelStyles?.includes(code) ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleTravelStyleSelection(code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">현재 어떤 형태로 생활하고 계신가요?</p>
          <div className="flex flex-wrap gap-2">
            {LIVING_TYPES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={lifestyleProfileData.livingType === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('livingType', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">가족과의 관계는 보통 어떤 편인가요?</p>
          <div className="flex flex-wrap gap-2">
            {FAMILY_DISTANCES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={lifestyleProfileData.familyDistance === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('familyDistance', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/values/2">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
