import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

export default function ChatData() {
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
            <div className="text-muted-foreground text-sm font-semibold">안녕하세요! 만나서 반가워요.</div>
          </div>

          <div className="flex flex-col items-end gap-5">
            <div className="text-muted-foreground text-xs">오후 2:32</div>
            <Badge className="h-3 min-w-4 px-1 text-[10px]">3</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
