import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col px-6">
      <div className="flex flex-col items-center gap-4 pt-28">
        <h1 className="text-2xl font-semibold">마실 로고</h1>
        <p className="text-muted-foreground text-center text-sm leading-relaxed">다시 시작하는 인연을 위해</p>
      </div>

      <div className="mt-auto flex flex-col gap-4 pb-10">
        <Button variant="outline" className="h-12 rounded-3xl">
          <Image src="/icons/naver.svg" alt="네이버" width={20} height={20} />
          네이버로 계속하기
        </Button>

        <Button variant="outline" className="h-12 rounded-3xl">
          <Image src="/icons/kakao.svg" alt="네이버" width={20} height={20} />
          카카오로 계속하기
        </Button>

        <Button asChild variant="outline" className="h-12 w-full rounded-3xl">
          <Link href="/sign-up/email">
            <MailIcon className="text-muted-foreground h-4 w-4" />
            이메일로 계속하기
          </Link>
        </Button>

        <p className="text-muted-foreground mt-6 text-center text-xs">
          모든 정보는 본인 확인 및 안전한 만남을 위해 사용됩니다.
        </p>
      </div>
    </div>
  );
}
