import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default async function ValuesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/signup/profile-image" className="text-muted-foreground flex justify-end">
        <Button variant="ghost" size="sm" className="font-bold">
          건너뛰기
        </Button>
      </Link>
      <div>{children}</div>
    </>
  );
}
