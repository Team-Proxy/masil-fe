import { MailIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col px-6">
      <div className="pt-28 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">마실 로고</h1>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">다시 시작하는 인연을 위해</p>
      </div>

      <div className="mt-auto pb-10 flex flex-col gap-4">
        <Button variant="outline" className="h-12 rounded-lg relative">
          <Image src="/icons/naver.svg" alt="네이버" width={20} height={20} />
          네이버로 계속하기
        </Button>

        <Button variant="outline" className="h-12 rounded-lg relative">
          <Image src="/icons/kakao.svg" alt="네이버" width={20} height={20} />
          카카오로 계속하기
        </Button>

        <Button variant="outline" className="h-12 rounded-lg relative">
          <MailIcon className="w-4 h-4 text-muted-foreground" />
          이메일로 계속하기
        </Button>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          모든 정보는 본인 확인 및 안전한 만남을 위해 사용됩니다.
        </p>
      </div>
    </div>
  );
}
