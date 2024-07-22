"use client";
import React from "react";
import { useSelector } from "react-redux";
import UniversalNavbar from "./Navbar/UniversalNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { RootState } from "@/app/store";
import { NavItemProps } from "./Navbar/NavItem";

interface AdaptiveLayoutProps {
  children: React.ReactNode;
  navItems: NavItemProps[];
  userType: "superAdmin" | "admin" | "member";
  logo: string;
  title: string;
}

const AdaptiveLayout: React.FC<AdaptiveLayoutProps> = ({
  children,
  navItems,
  userType,
  logo,
  title,
}) => {
  const isMinimized = useSelector(
    (state: RootState) => state.navbar.isMinimized
  );

  return (
    <div className="flex min-h-screen bg-secondary">
      <UniversalNavbar
        navItems={navItems}
        userType={userType}
        logo={logo}
        title={title}
      />
      <div className="flex flex-col flex-1">
        <MobileNavbar navItems={navItems} title={title} />
        <main
          className={`flex-1 transition-all duration-300 ease-in-out pt-14 md:pt-0 ${
            isMinimized ? "md:ml-16" : "md:ml-60"
          }`}
        >
          <div className="container mx-auto px-auto py-20">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default AdaptiveLayout;
