'use client';

import { usePathname } from 'next/navigation';

import Header from "@/components/Header";
import GlobalHeader from "@/components/GlobalHeader";

const HeaderWrapper = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return isHomePage ? <Header /> : <GlobalHeader />;
};

export default HeaderWrapper;