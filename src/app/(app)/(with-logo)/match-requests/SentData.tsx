import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

export default function SentData() {
  return (
    <div className="py-4">
      <div className="flex gap-2">
        <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-full">
          <Image src="/images/profile-image.jpeg" alt="Profile" fill className="block object-cover" />
        </div>

        <div className="flex w-full flex-1 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 font-bold">
              <span>닉네임</span>
              <span className="text-muted-foreground">(24)</span>
            </div>
            <div className="text-muted-foreground text-sm font-medium">• 2시간 전</div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <Badge className="bg-info-muted text-info-foreground border-info/30 border font-semibold">답변 대기</Badge>
            <button className="text-muted-foreground/80 hover:text-foreground text-xs underline">인연 요청 취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}
