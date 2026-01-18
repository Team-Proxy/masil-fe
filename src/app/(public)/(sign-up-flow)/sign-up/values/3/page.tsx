'use client';

import Link from 'next/link';
import { useState } from 'react';

import { KeyboardAwareButton } from '@/components/KeyboardAwareButton/KeyboardAwareButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  CONVERSATION_STYLES,
  CONFLICT_RESOLUTIONS,
  CONTACT_FREQUENCY_PREFERENCES,
  AFFECTION_EXPRESSIONS,
  RELATIONSHIP_INDEPENDENCE,
} from '@/constants/profile-options';

type RelationshipProfile = {
  conversationStyle?: string;
  conflictResolution?: string;
  contactFrequencyPreference?: string;
  affectionExpression?: string[];
  relationshipIndependence?: string;
};

const MAX_SELECTION = 4;

export default function Home() {
  const [relationshipProfileData, setRelationshipProfileData] = useState<RelationshipProfile>({
    conversationStyle: '',
    conflictResolution: '',
    contactFrequencyPreference: '',
    affectionExpression: [],
    relationshipIndependence: '',
  });

  const selectedCount = Object.values(relationshipProfileData).reduce((count, value) => {
    if (!value) return count;
    return count + (Array.isArray(value) ? value.length : 1);
  }, 0);

  const toggleSelection = (key: keyof RelationshipProfile, value: string) => {
    setRelationshipProfileData((prev) => {
      const current = prev[key];

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

      if (selectedCount === MAX_SELECTION) return prev;

      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const toggleAffectionExpressionSelection = (value: string) => {
    setRelationshipProfileData((prev) => {
      const current = prev.affectionExpression ?? [];

      if (current.includes(value)) {
        return {
          ...prev,
          affectionExpression: current.filter((item) => item !== value),
        };
      }

      if (selectedCount === MAX_SELECTION) return prev;

      return {
        ...prev,
        affectionExpression: [...current, value],
      };
    });
  };

  return (
    <div>
      <h1>사람을 대하는 방식에 대해 알려주세요.</h1>
      <div className="text-muted-foreground pb-4 text-sm">
        정답은 없습니다.
        <br />
        평소 관계에서의 본인 모습에 가장 가까운 선택지를 골라주세요.
        <p className="text-muted-foreground mt-2 flex justify-between text-xs">
          <span>최대 {MAX_SELECTION}개까지 선택할 수 있습니다.</span>
          <span>(현재 {selectedCount}개)</span>
        </p>
      </div>

      <Separator className="mb-4 h-1!" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">대화할 때 어떤 편이신가요?</p>
          <div className="flex flex-wrap gap-2">
            {CONVERSATION_STYLES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={relationshipProfileData.conversationStyle === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('conversationStyle', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">의견 차이나 갈등이 생기면 어떻게 하시나요?</p>
          <div className="flex flex-wrap gap-2">
            {CONFLICT_RESOLUTIONS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={relationshipProfileData.conflictResolution === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('conflictResolution', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">연락은 어느 정도가 편하신가요?</p>
          <div className="flex flex-wrap gap-2">
            {CONTACT_FREQUENCY_PREFERENCES.map(({ code, label }) => (
              <Badge
                key={code}
                variant={relationshipProfileData.contactFrequencyPreference === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('contactFrequencyPreference', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">마음을 표현하는 방식은 어떤 편인가요?</p>
            <p className="text-muted-foreground text-xs">여러 개 선택 가능합니다.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {AFFECTION_EXPRESSIONS.map(({ code, label }) => (
              <Badge
                key={code}
                variant={relationshipProfileData.affectionExpression?.includes(code) ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleAffectionExpressionSelection(code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-1 h-0.5!" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">관계에서 개인 시간은 얼마나 중요하신가요?</p>
          <div className="flex flex-wrap gap-2">
            {RELATIONSHIP_INDEPENDENCE.map(({ code, label }) => (
              <Badge
                key={code}
                variant={relationshipProfileData.relationshipIndependence === code ? 'secondary' : 'outline'}
                className="cursor-pointer px-2 text-base"
                onClick={() => toggleSelection('relationshipIndependence', code)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <KeyboardAwareButton>
        <Link href="/sign-up/values/4">
          <Button className="w-full">다음</Button>
        </Link>
      </KeyboardAwareButton>
    </div>
  );
}
