"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  AlertTriangle,
  Car,
  Video,
  Upload,
  Database,
} from "lucide-react";

interface DashboardOverviewProps {
  data: any;
}

export default function DashboardOverview({ data }: DashboardOverviewProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadProgress(0);
        }
      }, 200);
    }
  };

  const stats = [
    {
      title: "Bugungi prognoz",
      value: data?.predictions?.length || 0,
      icon: TrendingUp,
      color: "bg-blue-600",
      direction: "S",
      directionText: "Shimoliy qismda ko'proq",
    },
    {
      title: "Yuqori xavfli hududlar",
      value:
        data?.predictions?.filter((p: any) => p.risk_level === "high")
          ?.length || 0,
      icon: AlertTriangle,
      color: "bg-red-600",
      direction: "G",
      directionText: "G'arbiy qismda ko'proq",
      textColor: "text-red-400",
    },
    {
      title: "Faol patrullar",
      value: Math.floor((data?.predictions?.length || 0) / 5) + 5,
      icon: Car,
      color: "bg-green-600",
      direction: "J",
      directionText: "Janubiy qismda ko'proq",
      textColor: "text-green-400",
    },
    {
      title: "Ishlayotgan kameralar",
      value: Math.floor((data?.predictions?.length || 0) / 3) + 10,
      icon: Video,
      color: "bg-purple-600",
      direction: "Sh",
      directionText: "Sharqiy qismda ko'proq",
      textColor: "text-purple-400",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Main Statistics */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>1.1. Asosiy ko'rsatkichlar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">{stat.title}</p>
                      <p
                        className={`text-2xl font-bold ${stat.textColor || ""}`}
                      >
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`w-10 h-10 ${stat.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400 flex items-center">
                    <span
                      className={`direction-badge ${stat.direction.toLowerCase()} mr-1`}
                    >
                      {stat.direction}
                    </span>
                    <span>{stat.directionText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* File Upload Section */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>Ma'lumotlarni yuklash</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                CSV faylni tanlang
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Yuklash
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Faqat CSV formatidagi fayllar qabul qilinadi
              </p>
            </div>

            {isUploading && (
              <div className="p-3 rounded-lg bg-gray-800 border border-blue-600">
                <div className="flex items-center mb-2">
                  <div className="animate-spin mr-3">
                    <Database className="w-4 h-4 text-blue-400" />
                  </div>
                  <span>Fayl yuklanmoqda va tahlil qilinmoqda...</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recent Updates */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>So'nggi yangilanishlar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data?.predictions?.slice(0, 3).map((pred: any, index: number) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">
                      {pred.crime_type === "theft"
                        ? "O'g'irlik"
                        : pred.crime_type === "burglary"
                        ? "Uy jinoyati"
                        : pred.crime_type === "assault"
                        ? "Jarohatlash"
                        : pred.crime_type === "vandalism"
                        ? "Vandalizm"
                        : pred.crime_type}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {pred.district === "chilonzor"
                        ? "Chilonzor"
                        : pred.district}{" "}
                      tumani, {pred.hour}:00
                    </p>
                    <div className="mt-1 text-xs text-gray-400 flex items-center">
                      <span className="direction-badge north mr-1">S</span>
                      <span>Shimoliy qismda</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {Math.floor(Math.random() * 60)} daqiqa oldin
                  </span>
                </div>
              </div>
            )) || (
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">
                      Ma'lumotlar yuklanmagan
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Iltimos, jinoyat ma'lumotlarini yuklang
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">-</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
