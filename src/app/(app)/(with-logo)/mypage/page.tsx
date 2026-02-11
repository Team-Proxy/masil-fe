import { PlusIcon } from 'lucide-react';

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';

const VALUES_1 = [
  { key: '결혼 상태', label: '싱글' },
  { key: '반려동물', label: '없음' },
  { key: '운동', label: '가끔' },
  { key: '음주', label: '주 1-2회' },
  { key: '흡연', label: '비흡연자' },
  { key: '직업', label: '요식업' },
  { key: '종교', label: '무교' },
  { key: '정치', label: '보수적인 편' },
];

export default function Page() {
  return (
    <div className="px-4">
      <section>
        <div className="mb-2 flex gap-2">
          <Avatar size="lg">
            <AvatarImage src="/images/profile-image.jpeg" alt="profile-image" />
            <AvatarFallback>PP</AvatarFallback>
            <AvatarBadge className="cursor-pointer">
              <PlusIcon />
            </AvatarBadge>
          </Avatar>
          <div>
            <h2 className="font-semibold">닉네임 님</h2>
            <span className="text-muted-foreground text-sm">나를 더 자세히 소개해 보세요!</span>
          </div>
        </div>

        <div className="border-primary/20 bg-primary/5 rounded-md border-2 p-4">
          <div>
            <div className="flex justify-between">
              <span className="font-semibold">내 정보 완성도 85%</span>
              <span className="text-muted-foreground text-sm">80% 이상 매칭 확률 급증!</span>
            </div>
            <Progress value={0.85 * 100} />
          </div>
        </div>
      </section>
      <section>
        <p className="text-muted-foreground py-4 text-sm">
          인연을 만날 확률을 높이려면 상세한 프로필 작성이 중요합니다.
          <br />
          카테고리별로 정보를 입력해주세요.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">기본 프로필</h3>
            <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:text-none rounded-full">
              수정
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {VALUES_1.map(({ key, label }, index) => (
              <Popover key={`${key}-${index}`}>
                <PopoverTrigger asChild>
                  <Badge variant="secondary" className="cursor-pointer px-2 text-base">
                    {label}
                  </Badge>
                </PopoverTrigger>
                <PopoverContent align="center" side="top" className="w-fit p-1.5 text-xs">
                  <PopoverDescription>{key}</PopoverDescription>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
