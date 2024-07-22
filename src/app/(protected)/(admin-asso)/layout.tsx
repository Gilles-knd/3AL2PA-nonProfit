// app/(protected)/admin/layout.tsx
"use client";
import AdaptiveLayout from "@/components/layout/AdaptiveLayout";
import HeaderConnected from "@/components/layout/header/HeaderConnected";
import { ProtectedRoute } from "@/components/public/ProtectedRoute";
import { Home, Users, Settings, File } from "lucide-react";

export const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Members", href: "/ManageMembers" },
  { icon: File, label: "Documents", href: "/documents" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function AdminPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute requiredAdmin>
      <div className="flex flex-col min-h-screen">
        <HeaderConnected />
        <div>
          <AdaptiveLayout
            navItems={navItems}
            userType="admin"
            logo="/leaflogo.svg"
            title="Amaly Admin"
          >
            {children}
          </AdaptiveLayout>
        </div>
      </div>
    </ProtectedRoute>
  );
}
