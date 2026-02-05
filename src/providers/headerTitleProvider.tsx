'use client';

import { createContext, useContext } from 'react';

const HeaderTitleContext = createContext<string | null>(null);

export function HeaderTitleProvider({ title, children }: { title: string; children: React.ReactNode }) {
  return <HeaderTitleContext.Provider value={title}>{children}</HeaderTitleContext.Provider>;
}

export const useHeaderTitle = () => {
  return useContext(HeaderTitleContext);
};
