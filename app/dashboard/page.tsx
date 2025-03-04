import { Metadata } from "next";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { OverviewStats } from "@/components/dashboard/overview-stats";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { ProductInventory } from "@/components/dashboard/product-inventory";
import { RecentOrders } from "@/components/dashboard/recent-orders";

export const metadata: Metadata = {
  title: "Dashboard | E-commerce Admin",
  description: "E-commerce admin dashboard overview",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your store.
          </p>
        </div>
        
        <OverviewStats />
        
        <div className="grid gap-6 md:grid-cols-7">
          <div className="md:col-span-7 lg:col-span-4">
            <SalesChart />
          </div>
          <div className="md:col-span-7 lg:col-span-3">
            <RecentSales />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <ProductInventory />
          <RecentOrders />
        </div>
      </div>
    </DashboardLayout>
  );
}