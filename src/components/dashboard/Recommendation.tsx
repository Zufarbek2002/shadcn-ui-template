"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RecommendationsProps {
  data: any;
}

export default function Recommendations({ data }: RecommendationsProps) {
  return (
    <div className="space-y-6">
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>2.3. Resurs tavsiyalari</CardTitle>
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
                <SelectValue placeholder="Resurs turi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha resurslar</SelectItem>
                <SelectItem value="patrol">Patrul</SelectItem>
                <SelectItem value="cctv">Nazorat kameralari</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Ahamiyati" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha</SelectItem>
                <SelectItem value="critical">Kritik</SelectItem>
                <SelectItem value="high">Yuqori</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Patrul tavsiyalari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-sm font-medium">Ma'lumotlar yuklanmagan</p>
                <p className="text-xs text-gray-400 mt-1">
                  Iltimos, jinoyat ma'lumotlarini yuklang
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Nazorat kameralari tavsiyalari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-sm font-medium">Ma'lumotlar yuklanmagan</p>
                <p className="text-xs text-gray-400 mt-1">
                  Iltimos, jinoyat ma'lumotlarini yuklang
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Yoritish tavsiyalari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-sm font-medium">Ma'lumotlar yuklanmagan</p>
                <p className="text-xs text-gray-400 mt-1">
                  Iltimos, jinoyat ma'lumotlarini yuklang
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
