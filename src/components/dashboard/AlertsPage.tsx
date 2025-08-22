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
import { Check, RefreshCw, AlertTriangle } from "lucide-react";

interface AlertsPageProps {
  data: any;
}

export default function AlertsPage({ data }: AlertsPageProps) {
  return (
    <div className="space-y-6">
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>2.4. Ogohlantirishlar</CardTitle>
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
                <SelectValue placeholder="Xavf darajasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha</SelectItem>
                <SelectItem value="critical">Kritik</SelectItem>
                <SelectItem value="high">Yuqori</SelectItem>
                <SelectItem value="medium">O'rta</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha</SelectItem>
                <SelectItem value="active">Faol</SelectItem>
                <SelectItem value="resolved">Hal qilingan</SelectItem>
                <SelectItem value="pending">Kutilmoqda</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Faol ogohlantirishlar</CardTitle>
              <div className="flex space-x-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Check className="w-4 h-4 mr-1" />
                  Barchasini tasdiqlash
                </Button>
                <Button size="sm" variant="outline">
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Yangilash
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg p-4 bg-gray-800 border border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gray-600 rounded-full p-2 mr-3">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ma'lumotlar yuklanmagan</h3>
                      <p className="text-sm text-gray-300 mt-1">
                        Iltimos, jinoyat ma'lumotlarini yuklang
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Bugungi xulosa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Jami ogohlantirishlar:</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Kritik:</span>
                  <span className="font-bold text-red-400">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Yuqori:</span>
                  <span className="font-bold text-yellow-400">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">O'rta:</span>
                  <span className="font-bold text-blue-400">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Hal qilingan:</span>
                  <span className="font-bold text-green-400">0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
