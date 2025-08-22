"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimePredictionProps {
  data: any;
}

export default function TimePrediction({ data }: TimePredictionProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize Chart.js here
    if (typeof window !== "undefined" && chartRef.current) {
      console.log("[v0] Initializing time prediction chart");
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>2.2. Vaqtli prognoz</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tuman</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha tumanlar</SelectItem>
                  <SelectItem value="chilonzor">Chilonzor</SelectItem>
                  <SelectItem value="yunusobod">Yunusobod</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mahalla</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha mahallalar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Vaqt oraligi
              </label>
              <Select defaultValue="hourly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Soatlik</SelectItem>
                  <SelectItem value="daily">Kunlik</SelectItem>
                  <SelectItem value="weekly">Haftalik</SelectItem>
                  <SelectItem value="monthly">Oylik</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Jinoyat turi
              </label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha jinoyatlar</SelectItem>
                  <SelectItem value="theft">O'g'irlik</SelectItem>
                  <SelectItem value="burglary">Uy jinoyati</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Jinoyatlarning vaqt bo'yicha taqsimoti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <canvas ref={chartRef} className="w-full h-64"></canvas>
            </div>
          </CardContent>
        </Card>

        {/* High Risk Times */}
        <div className="space-y-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Yuqori xavf vaqtlari</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    time: "22:00 - 23:00",
                    probability: 85,
                    direction: "north",
                  },
                  { time: "18:00 - 19:00", probability: 72, direction: "west" },
                  {
                    time: "14:00 - 15:00",
                    probability: 68,
                    direction: "south",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-3">
                    <div className="font-medium">{item.time}</div>
                    <div className="text-sm text-gray-300">
                      Jinoyat ehtimolligi: {item.probability}%
                    </div>
                    <div className="mt-1 text-xs text-gray-400 flex items-center">
                      <span
                        className={`direction-badge ${item.direction} mr-1`}
                      >
                        {item.direction === "north"
                          ? "S"
                          : item.direction === "west"
                          ? "G"
                          : "J"}
                      </span>
                      <span>
                        {item.direction === "north"
                          ? "Shimoliy"
                          : item.direction === "west"
                          ? "G'arbiy"
                          : "Janubiy"}{" "}
                        qismda ko'proq
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Prognoz asoslari</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>• Tarixiy ma'lumotlar tahlili</p>
                <p>• Vaqt naqshlari aniqlash</p>
                <p>• Mavsumiy o'zgarishlar</p>
                <p>• Demografik omillar</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
