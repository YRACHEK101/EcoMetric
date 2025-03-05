import { Metadata } from "next";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { OverviewStats } from "@/components/dashboard/overview-stats";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { ProductInventory } from "@/components/dashboard/product-inventory";
import { RecentOrders } from "@/components/dashboard/recent-orders";

export const metadata: Metadata = {
  title: "Tableau de Bord | Administration EcoMetric",
  description: "Vue d'ensemble du tableau de bord d'administration EcoMetric",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de Bord</h1>
          <p className="text-muted-foreground">
            Bon retour ! Voici un aperçu de votre boutique.
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