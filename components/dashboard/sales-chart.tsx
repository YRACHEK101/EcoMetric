"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";

const data = [
  { name: "Jan", total: 1500 },
  { name: "Fév", total: 2300 },
  { name: "Mar", total: 3200 },
  { name: "Avr", total: 2800 },
  { name: "Mai", total: 3600 },
  { name: "Juin", total: 4100 },
  { name: "Juil", total: 4800 },
  { name: "Aoû", total: 5200 },
  { name: "Sep", total: 4700 },
  { name: "Oct", total: 5500 },
  { name: "Nov", total: 6100 },
  { name: "Déc", total: 7500 },
];

const categoryData = [
  { name: "Électronique", value: 35 },
  { name: "Vêtements", value: 25 },
  { name: "Maison & Cuisine", value: 20 },
  { name: "Livres", value: 10 },
  { name: "Autres", value: 10 },
];

export function SalesChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Aperçu des Ventes</CardTitle>
        <CardDescription>
          Consultez vos données de ventes sur différentes périodes
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <Tabs defaultValue="yearly">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 md:w-auto">
            <TabsTrigger value="yearly">Annuel</TabsTrigger>
            <TabsTrigger value="monthly">Mensuel</TabsTrigger>
            <TabsTrigger value="weekly">Hebdomadaire</TabsTrigger>
            <TabsTrigger value="categories">Catégories</TabsTrigger>
          </TabsList>
          <TabsContent value="yearly" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  allowDuplicatedCategory={false}
                />
                <YAxis 
                  allowDecimals={false}
                />
                <Tooltip 
                  formatter={(value) => [`${value} €`, 'Revenu']}
                  labelFormatter={(label) => `Mois: ${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="total" 
                  stroke="hsl(var(--chart-1))" 
                  fill="hsl(var(--chart-1) / 0.2)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="monthly" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data.slice(0, 4)}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  allowDuplicatedCategory={false}
                />
                <YAxis 
                  allowDecimals={false}
                />
                <Tooltip 
                  formatter={(value) => [`$${value}`, 'Revenue']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="total" 
                  stroke="hsl(var(--chart-2))" 
                  fill="hsl(var(--chart-2) / 0.2)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="weekly" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={[
                  { name: "Lun", total: 500 },
                  { name: "Mar", total: 650 },
                  { name: "Mer", total: 800 },
                  { name: "Jeu", total: 900 },
                  { name: "Ven", total: 1200 },
                  { name: "Sam", total: 1500 },
                  { name: "Dim", total: 1000 },
                ]}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  allowDuplicatedCategory={false}
                />
                <YAxis 
                  allowDecimals={false}
                />
                <Tooltip 
                  formatter={(value) => [`${value} €`, 'Revenu']}
                  labelFormatter={(label) => `Jour: ${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="total" 
                  stroke="hsl(var(--chart-3))" 
                  fill="hsl(var(--chart-3) / 0.2)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="categories" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  allowDuplicatedCategory={false}
                />
                <YAxis 
                  allowDecimals={false}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Pourcentage']}
                  labelFormatter={(label) => `Catégorie: ${label}`}
                />
                <Legend />
                <Bar 
                  dataKey="value" 
                  name="Pourcentage des ventes" 
                  fill="hsl(var(--chart-4))" 
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}