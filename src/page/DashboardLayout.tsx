"use client";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
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
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import "../styles/dashboard.css";

const navigationItems = [
  {
    id: "overview",
    label: "Boshqaruv paneli",
    icon: Gauge,
    path: "/dashboard/overview",
  },
  {
    id: "risk-map",
    label: "Jinoyat xavfi xaritasi",
    icon: MapPin,
    path: "/dashboard/risk-map",
  },
  {
    id: "time-prediction",
    label: "Vaqtli prognoz",
    icon: Clock,
    path: "/dashboard/time-prediction",
  },
  {
    id: "recommendations",
    label: "Resurs tavsiyalari",
    icon: Lightbulb,
    path: "/dashboard/recommendations",
  },
  {
    id: "alerts",
    label: "Ogohlantirishlar",
    icon: Bell,
    path: "/dashboard/alerts",
  },
  {
    id: "statistics",
    label: "Statistika va tahlil",
    icon: BarChart3,
    path: "/dashboard/statistics",
  },
  {
    id: "ai-analysis",
    label: "AI Tahlil Markazi",
    icon: Brain,
    path: "/dashboard/ai-analysis",
  },
  {
    id: "patrol-management",
    label: "Patrol Boshqaruvi",
    icon: Car,
    path: "/dashboard/patrol-management",
  },
  {
    id: "cctv-monitoring",
    label: "Nazorat Kameralari",
    icon: Video,
    path: "/dashboard/cctv-monitoring",
  },
];

export default function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate some initial data
    const simulatedData = {
      predictions: [
        {
          crime_type: "theft",
          district: "chilonzor",
          hour: 22,
          risk_level: "high",
          risk_score: 0.85,
        },
        {
          crime_type: "burglary",
          district: "yunusobod",
          hour: 18,
          risk_level: "medium",
          risk_score: 0.65,
        },
        {
          crime_type: "assault",
          district: "chilonzor",
          hour: 14,
          risk_level: "low",
          risk_score: 0.35,
        },
      ],
    };
    setDashboardData(simulatedData);

    return () => clearInterval(timer);
  }, []);

  const handleMenuToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentTime={currentTime} onMenuToggle={handleMenuToggle} />

      <div className="flex pt-16">
        <Sidebar
          navigationItems={navigationItems}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <main
          className={`flex-1 p-6 bg-gray-900/50 overflow-y-auto transition-all duration-300 ${
            sidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <Outlet context={{ data: dashboardData }} />
        </main>
      </div>
    </div>
  );
}
