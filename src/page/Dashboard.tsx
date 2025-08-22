"use client";

import { useState, useEffect } from "react";
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
import DashboardOverview from "../components/dashboard/DashboardOverview";
import RiskMap from "../components/dashboard/RiskMap";
import AlertsPage from "../components/dashboard/AlertsPage";
import AIAnalysis from "../components/dashboard/AIAnalysis";
import CCTVMonitoring from "../components/dashboard/CCTVMonitoring";
import "@/style/Dashboard.scss";
import TimePrediction from "@/components/dashboard/TimePredection";
import Recommendations from "@/components/dashboard/Recommendation";
import Statistics from "@/components/dashboard/Statisticss";
import PatrolManagement from "@/components/dashboard/PatrolManagment";
import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";

const navigationItems = [
  { id: "dashboard", label: "Boshqaruv paneli", icon: Gauge },
  { id: "risk-map", label: "Jinoyat xavfi xaritasi", icon: MapPin },
  { id: "time-prediction", label: "Vaqtli prognoz", icon: Clock },
  { id: "recommendations", label: "Resurs tavsiyalari", icon: Lightbulb },
  { id: "alerts", label: "Ogohlantirishlar", icon: Bell },
  { id: "statistics", label: "Statistika va tahlil", icon: BarChart3 },
  { id: "ai-analysis", label: "AI Tahlil Markazi", icon: Brain },
  { id: "patrol-management", label: "Patrol Boshqaruvi", icon: Car },
  { id: "cctv-monitoring", label: "Nazorat Kameralari", icon: Video },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
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

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview data={dashboardData} />;
      case "risk-map":
        return <RiskMap data={dashboardData} />;
      case "time-prediction":
        return <TimePrediction data={dashboardData} />;
      case "recommendations":
        return <Recommendations data={dashboardData} />;
      case "alerts":
        return <AlertsPage data={dashboardData} />;
      case "statistics":
        return <Statistics data={dashboardData} />;
      case "ai-analysis":
        return <AIAnalysis data={dashboardData} />;
      case "patrol-management":
        return <PatrolManagement data={dashboardData} />;
      case "cctv-monitoring":
        return <CCTVMonitoring data={dashboardData} />;
      default:
        return <DashboardOverview data={dashboardData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="flex pt-16">
        <Sidebar

        />

        <main
          className={`flex-1 p-6 bg-gray-900/50 overflow-y-auto transition-all duration-300 ${
            sidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}
