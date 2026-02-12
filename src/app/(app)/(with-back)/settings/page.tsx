import Link from 'next/link';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { SETTINGS_CONFIG } from '@/constants/settings-config';
import { cn } from '@/libs/utils';

export default function Page() {
  return (
    <div className="divide-muted-foreground/10 divide-y">
      {SETTINGS_CONFIG.map(({ id, title, items }, index) => (
        <section key={id} className="flex flex-col">
          <div className={cn('px-4', index !== 0 && 'pt-4')}>
            <h3 className="text-xs font-bold">{title}</h3>
          </div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {id === 'notifications' ? (
                  <div className="flex justify-between px-4 py-3 text-sm text-gray-800 transition-colors active:bg-gray-50">
                    <Label htmlFor={item.id}>{item.label}</Label>
                    <Switch id={item.id} />
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="block px-4 py-3 text-sm text-gray-800 transition-colors active:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
