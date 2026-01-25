import ReceivedData from '@/app/(app)/(with-logo)/match-requests/ReceivedData';
import SentData from '@/app/(app)/(with-logo)/match-requests/SentData';
import TabsLayout from '@/components/TabsLayout/TabsLayout';

export default function Page() {
  return (
    <div>
      <section className="px-4">
        <h1 className="pb-2 text-lg font-semibold">나의 인연 현황</h1>
        <p className="text-muted-foreground pb-4 text-sm">도착한 인연과 내가 보낸 인연 요청을 확인할 수 있습니다.</p>
      </section>

      <TabsLayout
        defaultValue="received"
        tabs={[
          {
            value: 'received',
            label: '도착한 인연',
            badgeCount: 30,
            content: (
              <div className="divide-y">
                <ReceivedData />
                <ReceivedData />
                <ReceivedData />
                <ReceivedData />
              </div>
            ),
          },
          {
            value: 'sent',
            label: '요청한 인연',
            content: (
              <div className="divide-y">
                <SentData />
                <SentData />
                <SentData />
                <SentData />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
