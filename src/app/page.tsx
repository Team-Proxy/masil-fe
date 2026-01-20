import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/login'); // 쿠키 사용해서 로그인 여부 판단 후 리다이렉트
}
