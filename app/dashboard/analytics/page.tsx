"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
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
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line
} from "recharts";
import { 
  ArrowDownIcon, 
  ArrowUpIcon, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ShoppingBag
} from "lucide-react";
import { cn } from "@/lib/utils";

const revenueData = [
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

const trafficSourceData = [
  { name: "Direct", value: 40 },
  { name: "Recherche organique", value: 30 },
  { name: "Réseaux sociaux", value: 15 },
  { name: "Références", value: 10 },
  { name: "E-mail", value: 5 },
];

const conversionData = [
  { name: "Jan", rate: 2.5 },
  { name: "Feb", rate: 2.8 },
  { name: "Mar", rate: 3.2 },
  { name: "Apr", rate: 3.0 },
  { name: "May", rate: 3.5 },
  { name: "Jun", rate: 3.7 },
  { name: "Jul", rate: 4.0 },
  { name: "Aug", rate: 4.2 },
  { name: "Sep", rate: 3.9 },
  { name: "Oct", rate: 4.5 },
  { name: "Nov", rate: 4.8 },
  { name: "Dec", rate: 5.2 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  trend: "up" | "down" | "neutral";
  trendValue: string;
}

function StatCard({ title, value, description, icon: Icon, trend, trendValue }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2">
          <span
            className={cn(
              "flex items-center text-xs",
              trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-gray-500"
            )}
          >
            {trend === "up" ? (
              <ArrowUpIcon className="mr-1 h-3 w-3" />
            ) : trend === "down" ? (
              <ArrowDownIcon className="mr-1 h-3 w-3" />
            ) : null}
            {trendValue}
          </span>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytique</h1>
          <p className="text-muted-foreground">
            Suivez les performances de votre boutique et le comportement client
          </p>
        </div>
        
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="sales">Ventes</TabsTrigger>
            <TabsTrigger value="products">Produits</TabsTrigger>
            <TabsTrigger value="customers">Clients</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Revenu Total"
                value="45 231,89 €"
                description="par rapport au mois dernier"
                icon={DollarSign}
                trend="up"
                trendValue="+20,1%"
              />
              <StatCard
                title="Commandes"
                value="356"
                description="par rapport au mois dernier"
                icon={ShoppingCart}
                trend="up"
                trendValue="+12,2%"
              />
              <StatCard
                title="Clients"
                value="2 543"
                description="par rapport au mois dernier"
                icon={Users}
                trend="down"
                trendValue="-1,5%"
              />
              <StatCard
                title="Taux de Conversion"
                value="3,6%"
                description="par rapport au mois dernier"
                icon={ArrowUpRight}
                trend="up"
                trendValue="+0,8%"
              />
            </div>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Aperçu des Revenus</CardTitle>
                  <CardDescription>Revenus mensuels pour l'année en cours</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={revenueData}
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
                        stroke="hsl(var(--chart-1))" 
                        fill="hsl(var(--chart-1) / 0.2)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ventes par Catégorie</CardTitle>
                  <CardDescription>Répartition des ventes par catégories de produits</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Sources de Trafic</CardTitle>
                  <CardDescription>Où vos clients viennent</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={trafficSourceData}
                      layout="vertical"
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        type="number"
                        allowDecimals={false}
                      />
                      <YAxis 
                        dataKey="name" 
                        type="category"
                        width={100}
                      />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Bar dataKey="value" fill="hsl(var(--chart-2))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Taux de Conversion</CardTitle>
                  <CardDescription>Taux de conversion mensuel pour l'année en cours</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={conversionData}
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
                        domain={[0, 'dataMax + 1']}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Conversion Rate']}
                        labelFormatter={(label) => `Month: ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="rate" 
                        stroke="hsl(var(--chart-3))" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="sales" className="space-y-6 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total des Ventes"
                value="45 231,89 €"
                description="par rapport au mois dernier"
                icon={DollarSign}
                trend="up"
                trendValue="+20,1%"
              />
              <StatCard
                title="Valeur Moyenne de Commande"
                value="127,05 €"
                description="par rapport au mois dernier"
                icon={ShoppingBag}
                trend="up"
                trendValue="+7,2%"
              />
              <StatCard
                title="Taux de Remboursement"
                value="2,1%"
                description="par rapport au mois dernier"
                icon={ArrowDownRight}
                trend="down"
                trendValue="-0,5%"
              />
              <StatCard
                title="Abandon de Panier"
                value="24,3%"
                description="par rapport au mois dernier"
                icon={ShoppingCart}
                trend="down"
                trendValue="-2,7%"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Tendances des Ventes</CardTitle>
                <CardDescription>Tendances mensuelles des ventes pour l'année en cours</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueData}
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
                      stroke="hsl(var(--chart-1))" 
                      fill="hsl(var(--chart-1) / 0.2)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="products" className="space-y-6 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total des Produits"
                value="124"
                description="par rapport au mois dernier"
                icon={Package}
                trend="up"
                trendValue="+4,3%"
              />
              <StatCard
                title="Meilleure Vente"
                value="Casque sans fil"
                description="45 unités vendues ce mois-ci"
                icon={ShoppingBag}
                trend="up"
                trendValue="+12,5%"
              />
              <StatCard
                title="Rupture de Stock"
                value="3"
                description="produits à réapprovisionner"
                icon={Package}
                trend="down"
                trendValue="-2"
              />
              <StatCard
                title="Vues de Produit"
                value="12 456"
                description="par rapport au mois dernier"
                icon={Eye}
                trend="up"
                trendValue="+18,2%"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Ventes par Catégorie</CardTitle>
                <CardDescription>Répartition des ventes par catégories de produits</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-6 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total des Clients"
                value="2 543"
                description="par rapport au mois dernier"
                icon={Users}
                trend="down"
                trendValue="-1,5%"
              />
              <StatCard
                title="Nouveaux Clients"
                value="156"
                description="par rapport au mois dernier"
                icon={Users}
                trend="up"
                trendValue="+12,3%"
              />
              <StatCard
                title="Taux de Retour"
                value="42,8%"
                description="par rapport au mois dernier"
                icon={ArrowUpRight}
                trend="up"
                trendValue="+3,2%"
              />
              <StatCard
                title="Valeur Moyenne à Vie"
                value="235,78 €"
                description="par rapport au mois dernier"
                icon={DollarSign}
                trend="up"
                trendValue="+5,4%"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Croissance des Clients</CardTitle>
                <CardDescription>Acquisition mensuelle de nouveaux clients</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Jan", new: 120, returning: 80 },
                      { name: "Feb", new: 145, returning: 95 },
                      { name: "Mar", new: 170, returning: 110 },
                      { name: "Apr", new: 155, returning: 120 },
                      { name: "May", new: 190, returning: 130 },
                      { name: "Jun", new: 210, returning: 140 },
                      { name: "Jul", new: 240, returning: 150 },
                      { name: "Aug", new: 255, returning: 160 },
                      { name: "Sep", new: 230, returning: 155 },
                      { name: "Oct", new: 270, returning: 170 },
                      { name: "Nov", new: 290, returning:  180 },
                      { name: "Dec", new: 320, returning: 190 },
                    ]}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
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
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="new" name="Nouveaux Clients" fill="hsl(var(--chart-1))" />
                    <Bar dataKey="returning" name="Clients Fidèles" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}