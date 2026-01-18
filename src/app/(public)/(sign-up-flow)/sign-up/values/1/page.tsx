'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PETS, EXERCISES, ALCOHOLS, SMOKING, JOBS, RELIGIONS, POLITICS } from '@/constants/profile-options';

type ProfileData = {
  pet?: string;
  exercise?: string;
  alcohol?: string;
  smoking?: string;
  job?: string;
  religion?: string;
  politics?: string;
};

export default function Home() {
  const [profileData, setProfileData] = useState<ProfileData>({
    pet: '',
    exercise: '',
    alcohol: '',
    smoking: '',
    job: '',
    religion: '',
    politics: '',
  });

  const toggleSelection = (key: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [key]: prev[key] === value ? '' : value,
    }));
  };

  return (
    <div>
      <h1 className="pb-6">지금부터 가볍게 나에 대해 알려주세요.</h1>
      <p className="text-muted-foreground pb-4 text-sm">
        정확하지 않아도 괜찮습니다. 취향/성향을 위한 대화입니다.
        <br />
        해당 내용들은 매칭 참고용으로만 사용되며 외부에 공개되지 않습니다.
      </p>
      <Separator className="mb-4 h-1!" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">반려동물과 함께 살고 있나요?</p>
          <div className="flex flex-wrap gap-2">
            {PETS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={profileData.pet === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('pet', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">운동은 얼마나 자주 하시나요?</p>
          <div className="flex flex-wrap gap-2">
            {EXERCISES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={profileData.exercise === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('exercise', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">술은 얼마나 드시나요?</p>
          <div className="flex flex-wrap gap-2">
            {ALCOHOLS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={profileData.alcohol === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('alcohol', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">흡연은 어느 정도 하시나요?</p>
          <div className="flex flex-wrap gap-2">
            {SMOKING.map(({ code, label }) => (
              <Badge
                key={code}
                variant={profileData.smoking === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('smoking', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">어떤 분야에서 일하고 계신가요?</p>
          <div className="flex flex-wrap gap-2">
            {JOBS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={profileData.job === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('job', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">종교가 있나요?</p>
          <div className="flex flex-wrap gap-2">
            {RELIGIONS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={profileData.religion === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('religion', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="mb-20 flex flex-col gap-2">
          <p className="font-semibold">정치 성향은 어디에 가까운가요?</p>
          <div className="flex flex-wrap gap-2">
            {POLITICS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={profileData.politics === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('politics', code)}
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
