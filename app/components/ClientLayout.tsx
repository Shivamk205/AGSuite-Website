"use client";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <div style={{ paddingTop: isHomePage ? 0 : "5rem" }}>
      {children}
    </div>
  );
} 