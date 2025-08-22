"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatisticsProps {
  data: any;
}

export default function Statistics({ data }: StatisticsProps) {
  return (
    <div className="space-y-6">
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>2.5. Statistika va tahlil</CardTitle>
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
                <SelectValue placeholder="Jinoyat turi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha jinoyatlar</SelectItem>
                <SelectItem value="theft">O'g'irlik</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="week">
              <SelectTrigger>
                <SelectValue placeholder="Vaqt oraligi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">So'nggi hafta</SelectItem>
                <SelectItem value="month">So'nggi oy</SelectItem>
                <SelectItem value="quarter">So'nggi chorak</SelectItem>
                <SelectItem value="year">So'nggi yil</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Qisqacha ma'lumot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">
                  Umumiy jinoyatlar soni
                </div>
                <div className="text-2xl font-bold">
                  {data?.predictions?.length || 0}
                </div>
                <div className="text-sm text-green-500 flex items-center">
                  <span>Ma'lumotlar yuklanmagan</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">
                  Eng ko'p jinoyat turi
                </div>
                <div className="text-xl font-bold">Noma'lum</div>
                <div className="text-sm">-</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Eng xavfli tuman</div>
                <div className="text-xl font-bold">Noma'lum</div>
                <div className="text-sm">-</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Prognoz aniqligi</div>
                <div className="text-xl font-bold text-green-400">87.5%</div>
                <div className="text-sm">AI modeli aniqligi</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Jinoyatlar trendi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Chart placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
