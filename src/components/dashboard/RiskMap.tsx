"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Flame, Compass } from "lucide-react";

interface RiskMapProps {
  data: any;
}

export default function RiskMap({ data }: RiskMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Leaflet map here
    if (typeof window !== "undefined" && mapRef.current) {
      // Map initialization code would go here
      console.log("[v0] Initializing risk map");
    }
  }, []);

  const riskZones = {
    high:
      data?.predictions?.filter((p: any) => p.risk_level === "high")?.length ||
      0,
    medium:
      data?.predictions?.filter((p: any) => p.risk_level === "medium")
        ?.length || 0,
    low:
      data?.predictions?.filter((p: any) => p.risk_level === "low")?.length ||
      0,
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>2.1. Jinoyat xavfi xaritasi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tuman</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Tuman tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha tumanlar</SelectItem>
                  <SelectItem value="chilonzor">Chilonzor</SelectItem>
                  <SelectItem value="yunusobod">Yunusobod</SelectItem>
                  <SelectItem value="mirzo_ulugbek">Mirzo Ulug'bek</SelectItem>
                  <SelectItem value="olmazor">Olmazor</SelectItem>
                  <SelectItem value="shayhontohur">Shayxontohur</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mahalla</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Mahalla tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha mahallalar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Jinoyat turi
              </label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Jinoyat turi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha jinoyatlar</SelectItem>
                  <SelectItem value="theft">O'g'irlik</SelectItem>
                  <SelectItem value="burglary">Uy jinoyati</SelectItem>
                  <SelectItem value="assault">Jarohatlash</SelectItem>
                  <SelectItem value="vandalism">Vandalizm</SelectItem>
                  <SelectItem value="vehicle">Avtoulov jinoyatlari</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Xavf darajasi
              </label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Xavf darajasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha darajalar</SelectItem>
                  <SelectItem value="high">Yuqori xavf</SelectItem>
                  <SelectItem value="medium">O'rta xavf</SelectItem>
                  <SelectItem value="low">Past xavf</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Xavf xaritasi</CardTitle>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Flame className="w-4 h-4 mr-1" />
                  Heatmap
                </Button>
                <Button size="sm" variant="outline">
                  <MapPin className="w-4 h-4 mr-1" />
                  Markerlar
                </Button>
                <Button size="sm" variant="outline">
                  <Compass className="w-4 h-4 mr-1" />
                  Yo'nalishlar
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div
              ref={mapRef}
              className="map-container bg-gray-800 rounded-lg flex items-center justify-center"
            >
              <div className="text-center text-gray-400">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Xarita yuklanmoqda...</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Zones & Recent Crimes */}
        <div className="space-y-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Xavf zonalari</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-red-600 mr-2"></div>
                    <span>Yuqori xavf</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {riskZones.high} zona
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span>O'rta xavf</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {riskZones.medium} zona
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span>Past xavf</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {riskZones.low} zona
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">
                  Yo'nalishlar bo'yicha taqsimot
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="direction-badge north">S</span>
                    <span className="text-xs mt-1">25%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="direction-badge south">J</span>
                    <span className="text-xs mt-1">30%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="direction-badge west">G</span>
                    <span className="text-xs mt-1">20%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="direction-badge east">Sh</span>
                    <span className="text-xs mt-1">25%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>So'nggi jinoyatlar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data?.predictions
                  ?.slice(0, 3)
                  .map((pred: any, index: number) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium">
                            {pred.crime_type === "theft"
                              ? "O'g'irlik"
                              : pred.crime_type}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {pred.district === "chilonzor"
                              ? "Chilonzor"
                              : pred.district}
                            , {pred.hour}:00
                          </p>
                          <div className="mt-1 text-xs text-gray-400 flex items-center">
                            <span className="direction-badge north mr-1">
                              S
                            </span>
                            <span>Shimoliy qismda</span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">
                          {Math.floor(Math.random() * 120)} daqiqa oldin
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
      </div>
    </div>
  );
}
