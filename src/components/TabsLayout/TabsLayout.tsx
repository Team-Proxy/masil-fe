'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabsLayoutProps {
  tabs: {
    value: string;
    label: string;
    content: React.ReactNode;
    badgeCount?: number;
  }[];
  defaultValue?: string;
}

export default function TabsLayout({ tabs, defaultValue }: TabsLayoutProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromQuery = searchParams.get('tab'); // 초기 query String
  const activeTab = tabFromQuery ?? defaultValue ?? tabs[0].value;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', value);
    router.replace(`?${params.toString()}`);
  };

  useEffect(() => {
    if (!tabFromQuery) {
      router.replace(`?tab=${activeTab}`);
    }
  }, [activeTab, router, tabFromQuery]);

  return (
    <Tabs defaultValue={activeTab} className="flex gap-0" onValueChange={handleTabChange}>
      <TabsList variant="line" className="bg-background sticky top-14 z-1 w-full gap-0 border-b py-3">
        {tabs.map((tab, index) => {
          const { value, label, badgeCount } = tab;
          return (
            <TabsTrigger
              key={index}
              value={value}
              className="data-[state=active]:text-primary ::after:absolute after:bg-primary relative rounded-none border-0 py-3.5 text-sm font-medium after:right-0 after:bottom-0"
            >
              <span>{label}</span>
              {badgeCount ? <Badge className="h-4 w-6">{badgeCount}</Badge> : null}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.value} className="p-4">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
