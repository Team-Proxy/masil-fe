'use client';

import { useEffect } from 'react';

import { cn } from '@/lib/utils';

interface KeyboardAwareButtonProps {
  children: React.ReactNode;
  className?: string;
}

const KEYBOARD_THRESHOLD = 150; // 키보드로 간주할 최소 높이 차이 (픽셀 단위)

export function KeyboardAwareButton({ children, className }: KeyboardAwareButtonProps) {
  useEffect(() => {
    // Visual Viewport API
    // 키보드가 열릴때, 주소창이 나타나거나 사라질때 height이 줄어듦
    const viewport = window.visualViewport;
    if (!viewport) return;

    const resizeHandler = () => {
      // innerHeight - viewport.height 값이 커지면
      // 화면 하단이 무언가(키보드 or 주소창)에 의해 가려졌다는 뜻
      const offset = window.innerHeight - viewport.height;
      // 주소창 변화는 offset이 작고, 소프트 키보드는 offset이 크게 발생하므로
      // 일정 threshold 이상일 때만 "키보드 열림"으로 판단한다
      const isKeyboardOpen = offset > KEYBOARD_THRESHOLD;
      // 키보드가 실제로 열린 경우에만 하단 고정 버튼을 키보드 높이만큼 위로 이동시킨다
      document.documentElement.style.setProperty('--keyboard-offset', isKeyboardOpen ? `${offset}px` : '0px');
    };

    resizeHandler();
    viewport.addEventListener('resize', resizeHandler);

    return () => {
      viewport.removeEventListener('resize', resizeHandler);
      document.documentElement.style.removeProperty('--keyboard-offset');
    };
  }, []);

  return (
    <div
      className={cn(
        'bg-background fixed inset-x-0 bottom-0',
        'mx-auto w-full max-w-105 p-4',
        'pb-[calc(env(safe-area-inset-bottom)+16px)]',
        className,
      )}
      style={{ transform: `translateY(calc(-1 * var(--keyboard-offset)))` }}
    >
      {/* 
        Y축은 아래로 갈 수록 '+', 위로 갈수록 '-'이기 때문에
        키보드 높이만큼 음수 이동시켜서 버튼이 가려지지 않도록 함
      */}
      {children}
    </div>
  );
}
