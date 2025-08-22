import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "./components/dashboard/Sidebar";
import DashboardOverview from "./components/dashboard/DashboardOverview";
import RiskMap from "./components/dashboard/RiskMap";
import AlertsPage from "./components/dashboard/AlertsPage";
import AIAnalysis from "./components/dashboard/AIAnalysis";
import CCTVMonitoring from "./components/dashboard/CCTVMonitoring";
import PresentationPage from "./page/DefaultPage";
import LoginPage from "./page/Login";
import TimePrediction from "./components/dashboard/TimePredection";
import Recommendations from "./components/dashboard/Recommendation";
import Statistics from "./components/dashboard/Statisticss";
import PatrolManagement from "./components/dashboard/PatrolManagment";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PresentationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard/*"
          element={
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                <Sidebar />
                <main className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/" element={<DashboardOverview />} />
                    <Route path="/overview" element={<DashboardOverview />} />
                    <Route path="/risk-map" element={<RiskMap />} />
                    <Route
                      path="/time-prediction"
                      element={<TimePrediction />}
                    />
                    <Route
                      path="/recommendations"
                      element={<Recommendations />}
                    />
                    <Route path="/alerts" element={<AlertsPage />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/ai-analysis" element={<AIAnalysis />} />
                    <Route
                      path="/patrol-management"
                      element={<PatrolManagement />}
                    />
                    <Route
                      path="/cctv-monitoring"
                      element={<CCTVMonitoring />}
                    />
                  </Routes>
                </main>
              </div>
            </SidebarProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
