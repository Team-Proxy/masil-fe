'use client';

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');
  
  return <div>수정페이지: {step} </div>;
}
