"use client";

import Header from "./header";
import { StyledLayout } from "./styles";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
}
