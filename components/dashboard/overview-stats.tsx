"use client";

import { 
  ArrowDownIcon, 
  ArrowUpIcon, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

export function OverviewStats() {
  return (
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
        title="Produits"
        value="124"
        description="par rapport au mois dernier"
        icon={Package}
        trend="up"
        trendValue="+4,3%"
      />
    </div>
  );
}