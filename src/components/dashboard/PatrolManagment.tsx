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
import { RefreshCw, Plus } from "lucide-react";

interface PatrolManagementProps {
  data: any;
}

export default function PatrolManagement({ data }: PatrolManagementProps) {
  return (
    <div className="space-y-6">
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>3.2. Patrol Boshqaruvi</CardTitle>
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
                <SelectValue placeholder="Patrul turi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha</SelectItem>
                <SelectItem value="foot">Piyoda</SelectItem>
                <SelectItem value="vehicle">Avtomobil</SelectItem>
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
              <CardTitle>Patrollarning real vaqtda joylashuvi</CardTitle>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <RefreshCw className="w-4 h-4 mr-1" />
                Yangilash
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="map-container bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <span>Patrol xaritasi yuklanmoqda...</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Patrul statistikasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Faol patrullar:</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Jami masofa:</span>
                <span className="font-bold">1,245 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">O'rtacha tezlik:</span>
                <span className="font-bold">35 km/soat</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Jinoyat to'xtatilgan:</span>
                <span className="font-bold text-green-500">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Ogohlantirishlar:</span>
                <span className="font-bold text-yellow-500">8</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="dashboard-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Patrul topshiriqlari</CardTitle>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-1" />
              Yangi topshiriq
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                  <th className="px-6 py-3">Patrul</th>
                  <th className="px-6 py-3">Topshiriq</th>
                  <th className="px-6 py-3">Joylashuv</th>
                  <th className="px-6 py-3">Yo'nalish</th>
                  <th className="px-6 py-3">Vaqt</th>
                  <th className="px-6 py-3">Holat</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 bg-gray-800">
                  <td className="px-6 py-4" colSpan={6}>
                    Ma'lumotlar yuklanmagan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
