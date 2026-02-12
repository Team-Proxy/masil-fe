'use client';

import { useSearchParams } from 'next/navigation';

import ChildrenStep from './ChildrenStep';
import MaritalStatusStep from './MaritalStatusStep';
import QuestionStep from './QuestionStep';

export default function Page() {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  return (
    <div>
      {step === 'marital-status' && <MaritalStatusStep />}
      {step === 'children' && <ChildrenStep />}
      {step === 'question' && <QuestionStep />}
    </div>
  );
}
