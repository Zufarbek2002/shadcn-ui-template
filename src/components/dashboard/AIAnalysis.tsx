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
import { Progress } from "@/components/ui/progress";
import { Play } from "lucide-react";

interface AIAnalysisProps {
  data: any;
}

export default function AIAnalysis({ data }: AIAnalysisProps) {
  return (
    <div className="space-y-6">
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>3.1. Sun'iy Intellekt Tahlil Markazi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select defaultValue="prophet">
              <SelectTrigger>
                <SelectValue placeholder="Model turi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prophet">Time Series (Prophet)</SelectItem>
                <SelectItem value="lstm">Deep Learning (LSTM)</SelectItem>
                <SelectItem value="clustering">
                  Hotspot Detection (DBSCAN)
                </SelectItem>
                <SelectItem value="classification">
                  Jinoyat turi klassifikatsiyasi
                </SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="6months">
              <SelectTrigger>
                <SelectValue placeholder="Ma'lumotlar manbai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6months">So'nggi 6 oy</SelectItem>
                <SelectItem value="1year">So'nggi 1 yil</SelectItem>
                <SelectItem value="3years">So'nggi 3 yil</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="predictive">
              <SelectTrigger>
                <SelectValue placeholder="Tahlil turi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="predictive">Bashorat tahlili</SelectItem>
                <SelectItem value="descriptive">Tavsiflovchi tahlil</SelectItem>
                <SelectItem value="prescriptive">Tavsiya tahlili</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader>
            <CardTitle>AI Tahlil Jarayoni</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">1</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Ma'lumotlarni yuklash
                    </span>
                    <span className="text-sm">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">2</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Modelni o'qitish
                    </span>
                    <span className="text-sm">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">3</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Bashoratlar generatsiyasi
                    </span>
                    <span className="text-sm">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Model parametrlari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>O'rgatish vaqti:</span>
                <span className="font-mono">2.5 soat</span>
              </div>
              <div className="flex justify-between">
                <span>O'rgatish namunasi:</span>
                <span className="font-mono">15,420</span>
              </div>
              <div className="flex justify-between">
                <span>Test namunasi:</span>
                <span className="font-mono">3,855</span>
              </div>
              <div className="flex justify-between">
                <span>RMSE:</span>
                <span className="font-mono">0.45</span>
              </div>
              <div className="flex justify-between">
                <span>MAE:</span>
                <span className="font-mono">0.32</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle>Modelni sinab ko'rish</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select defaultValue="chilonzor">
              <SelectTrigger>
                <SelectValue placeholder="Tuman" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chilonzor">Chilonzor</SelectItem>
                <SelectItem value="yunusobod">Yunusobod</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="12">
              <SelectTrigger>
                <SelectValue placeholder="Mahalla" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12-mahalla</SelectItem>
                <SelectItem value="5">5-mahalla</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="north">
              <SelectTrigger>
                <SelectValue placeholder="Yo'nalish" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north">Shimoliy</SelectItem>
                <SelectItem value="south">Janubiy</SelectItem>
                <SelectItem value="west">G'arbiy</SelectItem>
                <SelectItem value="east">Sharqiy</SelectItem>
              </SelectContent>
            </Select>
            <input
              type="date"
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Play className="w-4 h-4 mr-2" />
            Modelni ishga tushirish
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
