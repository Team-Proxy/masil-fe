import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverDescription, PopoverTrigger } from '@/components/ui/popover';
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

const VALUES_2 = [
  { key: '생활 리듬', label: '유동적' },
  { key: '식사', label: '배달' },
  { key: '소비 성향', label: '소비형' },
  { key: '여향 스타일', label: ['국내'] },
  { key: '생활 형태', label: '혼자' },
  { key: '가족과의 관계', label: '명절 위주' },
];

const VALUES_3 = [
  { key: '대화 스타일', label: '배려하는' },
  { key: '갈등 해결 방식', label: '시간 둔 후 해결' },
  { key: '연락 스타일', label: '필요할 때 연락' },
  { key: '감정 표현 방식', label: '주 1-2회' },
];

const VALUES_4 = [
  { key: '운동', label: ['런닝', '축구', '요가/스트레칭', '수영', '자전거'] },
  { key: '문화생활', label: ['책 읽기'] },
  { key: '음악', label: ['KPOP'] },
  { key: '취미', label: ['주 1-2회'] },
  { key: '여행/나들이', label: ['국내 여행'] },
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

        <div className="border-primary/10 bg-primary/5 rounded-md border-2 p-4">
          <div>
            <div className="flex justify-between">
              <span className="font-semibold">내 정보 완성도 80%</span>
              <span className="text-muted-foreground text-sm">80% 이상 매칭 확률 급증!</span>
            </div>
            <Progress value={0.8 * 100} />
          </div>
        </div>
      </section>
      <section>
        <p className="text-muted-foreground py-4 text-sm">
          인연을 만날 확률을 높이려면 상세한 프로필 작성이 중요합니다.
          <br />
          카테고리별로 정보를 입력해 주세요.
        </p>

        <div className="flex flex-col gap-4">
          <div className="border-primary/10 bg-primary/3 flex flex-col gap-2 rounded-3xl border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">기본 프로필</h3>
                <span className="text-muted-foreground text-xs">8/8</span>
              </div>
              <Link href="/mypage/profile/basic/edit?step=marital-status">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-primary hover:text-none rounded-full"
                >
                  수정
                </Button>
              </Link>
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

          <div className="border-primary/10 bg-primary/3 flex flex-col gap-2 rounded-3xl border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">생활 습관</h3>
                <span className="text-muted-foreground text-xs">6/6</span>
              </div>
              <Link href="/mypage/profile/habits/edit">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-primary hover:text-none rounded-full"
                >
                  수정
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {VALUES_2.flatMap(({ key, label }) => {
                const labels = Array.isArray(label) ? label : [label];

                return labels.map((item, idx) => (
                  <Popover key={`${key}-${item}-${idx}`}>
                    <PopoverTrigger asChild>
                      <Badge variant="secondary" className="cursor-pointer px-2 text-base">
                        {item}
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent align="center" side="top" className="w-fit p-1.5 text-xs">
                      <PopoverDescription>{key}</PopoverDescription>
                    </PopoverContent>
                  </Popover>
                ));
              })}
            </div>
          </div>

          <div className="border-primary/10 bg-primary/3 flex flex-col gap-2 rounded-3xl border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">커뮤니케이션 성향</h3>
                <span className="text-muted-foreground text-xs">4/4</span>
              </div>
              <Link href="/mypage/profile/communication/edit">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-primary hover:text-none rounded-full"
                >
                  수정
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {VALUES_3.map(({ key, label }, index) => (
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

          <div className="border-primary/10 bg-primary/3 flex flex-col gap-2 rounded-3xl border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">여가 생활</h3>
                <span className="text-muted-foreground text-xs">5/8</span>
              </div>
              <Link href="/mypage/profile/hobbies/edit">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-primary hover:text-none rounded-full"
                >
                  수정
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {VALUES_4.flatMap(({ key, label }) => {
                const labels = Array.isArray(label) ? label : [label];

                return labels.map((item, idx) => (
                  <Popover key={`${key}-${item}-${idx}`}>
                    <PopoverTrigger asChild>
                      <Badge variant="secondary" className="cursor-pointer px-2 text-base">
                        {item}
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent align="center" side="top" className="w-fit p-1.5 text-xs">
                      <PopoverDescription>{key}</PopoverDescription>
                    </PopoverContent>
                  </Popover>
                ));
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
