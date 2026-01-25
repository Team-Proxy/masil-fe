import { CheckIcon, SearchIcon, Settings2Icon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  const isLoading = false;

  return (
    <div className="flex h-full flex-col gap-2 px-4">
      <div className="flex justify-end">
        <Link href="/matches/filters">
          <Settings2Icon size={20} />
        </Link>
      </div>
      <Card className="relative flex-1 overflow-hidden rounded-xl border-0 shadow-none">
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex justify-center">Loading...</div>
          ) : (
            <div className="flex">
              <Image src="/images/profile-image.jpeg" alt="Profile" fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-50 bg-linear-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-25 left-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-[43px] leading-none font-bold tracking-tighter">닉네임</span>{' '}
                  <span className="text-[38px] font-semibold text-white/80">48</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>

        <ul className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
          <li>
            <Button
              variant="outline"
              className="border-error bg-error-muted hover:bg-error-muted/90 h-13.75 w-13.75 flex-col gap-1 rounded-full text-[10px]"
              disabled={isLoading}
            >
              <XIcon className="text-error h-5 w-5" />
              인연 제외
            </Button>
          </li>
          <li>
            <Button className="flex h-17.5 w-17.5 flex-col gap-1 rounded-full" disabled={isLoading}>
              <SearchIcon className="h-5! w-5!" />
              <span className="text-sm font-semibold">인연 찾기</span>
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              className="border-success bg-success-muted hover:bg-success-muted/90 h-13.75 w-13.75 flex-col gap-1 rounded-full text-[10px]"
              disabled={isLoading}
            >
              <CheckIcon className="text-success h-5 w-5" />
              인연 요청
            </Button>
          </li>
        </ul>
      </Card>
    </div>
  );
}
