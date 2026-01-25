import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ReceivedData() {
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

          <div className="flex flex-col items-end gap-2">
            <Badge className="bg-info-muted text-info-foreground border-info/30 border font-semibold">답변 대기</Badge>
            <button className="text-muted-foreground hover:text-foreground text-xs underline" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-4">
        <Button type="button" size="sm">
          수락
        </Button>
        <Button type="button" variant="outline" size="sm">
          거절
        </Button>
      </div>
    </div>
  );
}
