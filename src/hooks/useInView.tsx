import { useEffect, useRef, useState } from 'react';

interface UseInViewProps extends IntersectionObserverInit {
  once?: boolean;
  initialInView?: boolean; // observer 결과를 모를 때 초기값을 가정
  rootRef?: React.RefObject<Element | null>; // root 지정 (기본값 null - viewport)
}

export default function useInView<T extends HTMLElement>(options: UseInViewProps = {}) {
  const { once = false, initialInView = false, rootRef, rootMargin, threshold = 0 } = options;

  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState<boolean>(initialInView); // target이 root 영역과 교차 중인지 여부
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null); // IntersectionObserver가 전달하는 교차 상태 정보

  useEffect(() => {
    // SSR 환경에서는 IntersectionObserver를 사용할 수 없음
    if (typeof window === 'undefined') return;
    if (!('IntersectionObserver' in window)) return;

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsInView(entry.isIntersecting);

        if (once && entry.isIntersecting) {
          observer.disconnect(); // once 옵션이 true이면 한 번 보인 후 관찰 중지
        }
      },
      { root: rootRef?.current ?? null, rootMargin, threshold },
    );

    observer.observe(ref.current); // ref가 가리키는 DOM 요소 관찰 시작

    return () => observer.disconnect();
  }, [once, rootRef, rootMargin, threshold]);

  return { ref, isInView, entry };
}
