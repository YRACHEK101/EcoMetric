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
  { name: "Feb", total: 2300 },
  { name: "Mar", total: 3200 },
  { name: "Apr", total: 2800 },
  { name: "May", total: 3600 },
  { name: "Jun", total: 4100 },
  { name: "Jul", total: 4800 },
  { name: "Aug", total: 5200 },
  { name: "Sep", total: 4700 },
  { name: "Oct", total: 5500 },
  { name: "Nov", total: 6100 },
  { name: "Dec", total: 7500 },
];

const categoryData = [
  { name: "Electronics", value: 35 },
  { name: "Clothing", value: 25 },
  { name: "Home & Kitchen", value: 20 },
  { name: "Books", value: 10 },
  { name: "Others", value: 10 },
];

const trafficSourceData = [
  { name: "Direct", value: 40 },
  { name: "Organic Search", value: 30 },
  { name: "Social Media", value: 15 },
  { name: "Referral", value: 10 },
  { name: "Email", value: 5 },
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
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Track your store's performance and customer behavior
          </p>
        </div>
        
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Revenue"
                value="$45,231.89"
                description="compared to last month"
                icon={DollarSign}
                trend="up"
                trendValue="+20.1%"
              />
              <StatCard
                title="Orders"
                value="356"
                description="compared to last month"
                icon={ShoppingCart}
                trend="up"
                trendValue="+12.2%"
              />
              <StatCard
                title="Customers"
                value="2,543"
                description="compared to last month"
                icon={Users}
                trend="down"
                trendValue="-1.5%"
              />
              <StatCard
                title="Conversion Rate"
                value="3.6%"
                description="compared to last month"
                icon={ArrowUpRight}
                trend="up"
                trendValue="+0.8%"
              />
            </div>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue for the current year</CardDescription>
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
                  <CardTitle>Sales by Category</CardTitle>
                  <CardDescription>Distribution of sales across product categories</CardDescription>
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
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your customers are coming from</CardDescription>
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
                  <CardTitle>Conversion Rate</CardTitle>
                  <CardDescription>Monthly conversion rate for the current year</CardDescription>
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
                title="Total Sales"
                value="$45,231.89"
                description="compared to last month"
                icon={DollarSign}
                trend="up"
                trendValue="+20.1%"
              />
              <StatCard
                title="Average Order Value"
                value="$127.05"
                description="compared to last month"
                icon={ShoppingBag}
                trend="up"
                trendValue="+7.2%"
              />
              <StatCard
                title="Refund Rate"
                value="2.1%"
                description="compared to last month"
                icon={ArrowDownRight}
                trend="down"
                trendValue="-0.5%"
              />
              <StatCard
                title="Cart Abandonment"
                value="24.3%"
                description="compared to last month"
                icon={ShoppingCart}
                trend="down"
                trendValue="-2.7%"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales Trends</CardTitle>
                <CardDescription>Monthly sales trends for the current year</CardDescription>
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
                title="Total Products"
                value="124"
                description="compared to last month"
                icon={Package}
                trend="up"
                trendValue="+4.3%"
              />
              <StatCard
                title="Top Seller"
                value="Wireless Headphones"
                description="45 units sold this month"
                icon={ShoppingBag}
                trend="up"
                trendValue="+12.5%"
              />
              <StatCard
                title="Out of Stock"
                value="3"
                description="products need restocking"
                icon={Package}
                trend="down"
                trendValue="-2"
              />
              <StatCard
                title="Product Views"
                value="12,456"
                description="compared to last month"
                icon={Eye}
                trend="up"
                trendValue="+18.2%"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Distribution of sales across product categories</CardDescription>
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
                title="Total Customers"
                value="2,543"
                description="compared to last month"
                icon={Users}
                trend="down"
                trendValue="-1.5%"
              />
              <StatCard
                title="New Customers"
                value="156"
                description="compared to last month"
                icon={Users}
                trend="up"
                trendValue="+12.3%"
              />
              <StatCard
                title="Returning Rate"
                value="42.8%"
                description="compared to last month"
                icon={ArrowUpRight}
                trend="up"
                trendValue="+3.2%"
              />
              <StatCard
                title="Avg. Lifetime Value"
                value="$235.78"
                description="compared to last month"
                icon={DollarSign}
                trend="up"
                trendValue="+5.4%"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>Monthly new customer acquisition</CardDescription>
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
                    <Bar dataKey="new" name="New Customers" fill="hsl(var(--chart-1))" />
                    <Bar dataKey="returning" name="Returning Customers" fill="hsl(var(--chart-2))" />
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