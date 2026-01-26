import { MOCK_MESSAGES } from '@/mocks/chatMessages';
import { getMessageFlags } from '@/utils/chatGrouping';

import ChatBubble from './ChatBubble';

interface PageProps {
  params: Promise<{ id: string }>;
}

const ME_ID = 1;

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="bg-primary-foreground flex h-dvh flex-col">
      <span>ChatRoom: {id}</span>
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6">
        {MOCK_MESSAGES.map((msg, index) => {
          const { showTail, showTime } = getMessageFlags(MOCK_MESSAGES, index);

          return (
            <ChatBubble
              key={msg.id}
              isMe={msg.senderId === ME_ID}
              message={msg.message}
              date={msg.date}
              showTail={showTail}
              showTime={showTime}
            />
          );
        })}
      </div>
      <div className="bg-background sticky bottom-0 border-t px-3 py-2">
        <div className="flex items-center gap-2">
          <button className="text-muted-foreground">＋</button>
          <input
            placeholder="메시지를 입력하세요"
            className="bg-muted flex-1 rounded-full px-4 py-2 text-sm outline-none"
          />
          <button className="text-primary">▶</button>
        </div>
      </div>
    </div>
  );
}
