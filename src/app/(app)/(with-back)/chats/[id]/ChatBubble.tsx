// components/chat/ChatBubble.tsx
import { cn } from '@/libs/utils';
import { formatChatTime } from '@/utils/chatTime';

interface ChatBubbleProps {
  isMe: boolean;
  message: string;
  date: string;
  showTail: boolean;
  showTime: boolean;
}

export default function ChatBubble({ isMe, message, date, showTail, showTime }: ChatBubbleProps) {
  const bubbleClass = cn(
    'inline-block max-w-[70%] px-4 py-2 text-sm',
    isMe ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground',
    showTail ? (isMe ? 'rounded-xl rounded-br-sm' : 'rounded-xl rounded-bl-sm') : 'rounded-xl',
  );

  return (
    <div className={cn('flex items-end gap-1', isMe ? 'flex-row-reverse justify-start' : 'justify-start')}>
      <div className={bubbleClass}>{message}</div>

      {showTime && <span className="text-muted-foreground text-[11px]">{formatChatTime(date)}</span>}
    </div>
  );
}
