"use client";

import {
  Gauge,
  MapPin,
  Clock,
  Lightbulb,
  Bell,
  BarChart3,
  Brain,
  Car,
  Video,
  Shield,
} from "lucide-react";

import {
  Sidebar as SidebarTemp,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Boshqaruv paneli",
    icon: Gauge,
    path: "/dashboard/overview",
  },
  {
    title: "Jinoyat xavfi xaritasi",
    icon: MapPin,
    path: "/dashboard/risk-map",
  },
  {
    title: "Vaqtli prognoz",
    icon: Clock,
    path: "/dashboard/time-prediction",
  },
  {
    title: "Resurs tavsiyalari",
    icon: Lightbulb,
    path: "/dashboard/recommendations",
  },
  {
    title: "Ogohlantirishlar",
    icon: Bell,
    path: "/dashboard/alerts",
  },
  {
    title: "Statistika va tahlil",
    icon: BarChart3,
    path: "/dashboard/statistics",
  },
  {
    title: "AI Tahlil Markazi",
    icon: Brain,
    path: "/dashboard/ai-analysis",
  },
  {
    title: "Patrol Boshqaruvi",
    icon: Car,
    path: "/dashboard/patrol-management",
  },
  {
    title: "Nazorat Kameralari",
    icon: Video,
    path: "/dashboard/cctv-monitoring",
  },
];

export function Sidebar() {
  return (
    <SidebarTemp collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#1e40af] to-[#3b82f6]">
            <Shield className="size-5 text-white" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-bold text-lg text-sidebar-foreground">
              Chilonzor Xavfsizlik
            </span>
            <span className="text-xs text-sidebar-foreground/60">
              AI Monitoring v3.0
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      "text-sidebar-foreground/70 hover:text-sidebar-foreground",
                      "hover:bg-gradient-to-r hover:from-[#1e40af] hover:to-[#3b82f6] hover:text-white",
                      isActive &&
                        "bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white shadow-sm"
                    )
                  }
                >
                  <item.icon className="size-4 shrink-0" />
                  <span className="truncate">{item.title}</span>
                </NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </SidebarTemp>
  );
}
