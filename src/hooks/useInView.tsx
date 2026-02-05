import { useEffect, useRef, useState } from 'react';

interface UseInViewProps extends IntersectionObserverInit {
  once?: boolean;
  initialInView?: boolean;
  rootId?: string;
  targetId?: string;
}

export default function useInView({
  once = false,
  initialInView = false,
  rootId,
  targetId,
  rootMargin,
  threshold = 0,
}: UseInViewProps = {}) {
  const [isInView, setIsInView] = useState(initialInView);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('IntersectionObserver' in window)) return;

    const root = rootId ? document.getElementById(rootId) : null;
    const target = targetId ? document.getElementById(targetId) : null;

    if (!target) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (once && entry.isIntersecting) observerRef.current?.disconnect();
      },
      { root, rootMargin, threshold },
    );

    observerRef.current.observe(target);

    return () => observerRef.current?.disconnect();
  }, [rootId, targetId, once, rootMargin, threshold]);

  return { isInView };
}
