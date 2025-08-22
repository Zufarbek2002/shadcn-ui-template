"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw, Layers, Expand, Video } from "lucide-react";

interface CCTVMonitoringProps {
  data: any;
}

export default function CCTVMonitoring({ data }: CCTVMonitoringProps) {
  return (
    <div className="space-y-6">
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>3.3. Nazorat Kameralari Monitoringi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Tuman" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha tumanlar</SelectItem>
                <SelectItem value="chilonzor">Chilonzor</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Mahalla" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha mahallalar</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Kamera turi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha</SelectItem>
                <SelectItem value="fixed">Statsionar</SelectItem>
                <SelectItem value="ptz">Aylanuvchi</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Holati" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha</SelectItem>
                <SelectItem value="active">Faol</SelectItem>
                <SelectItem value="inactive">Nofaol</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Kamera joylashuvi xaritasi</CardTitle>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Layers className="w-4 h-4 mr-1" />
                  Qatlamlar
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Yangilash
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="map-container bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Video className="w-12 h-12 mx-auto mb-2" />
                <p>CCTV xaritasi yuklanmoqda...</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Kamera statistikasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Jami kameralar:</span>
                <span className="font-bold">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Faol kameralar:</span>
                <span className="font-bold text-green-500">142 (91%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Nofaol kameralar:</span>
                <span className="font-bold text-red-500">14 (9%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">O'rtacha yoshi:</span>
                <span className="font-bold">3.2 yil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Yangi kameralar:</span>
                <span className="font-bold text-blue-500">28 (18%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Kamera ko'rish imkoniyati</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded mb-2 h-24 flex items-center justify-center">
                  <Video className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm font-medium text-center">
                  Kamera #CCTV-124
                </p>
                <p className="text-xs text-gray-400 text-center">
                  Chilonzor, 12-mahalla (Shimoliy)
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded mb-2 h-24 flex items-center justify-center">
                  <Video className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm font-medium text-center">
                  Kamera #CCTV-087
                </p>
                <p className="text-xs text-gray-400 text-center">
                  Yunusobod, 5-mahalla (G'arbiy)
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Expand className="w-4 h-4 mr-2" />
                To'liq ekran rejimi
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Avtomatik aniqlash (AI)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-600 rounded-full p-2 mr-3">
                  <span className="text-white text-xs">AI</span>
                </div>
                <div>
                  <h4 className="font-medium">Shubhali harakatlar</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Ma'lumotlar yuklanmagan
                  </p>
                  <div className="mt-2">
                    <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">
                      Nofaol
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-full p-2 mr-3">
                  <span className="text-white text-xs">AI</span>
                </div>
                <div>
                  <h4 className="font-medium">Avtomobil raqamlari</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Ma'lumotlar yuklanmagan
                  </p>
                  <div className="mt-2">
                    <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">
                      Nofaol
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
