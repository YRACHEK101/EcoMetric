"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  LogOut,
  CreditCard,
  MessageSquare,
  Bell,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarItems = [
  {
    title: "Tableau de bord",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Produits",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Commandes",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    title: "Clients",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Analytique",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Paiements",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Paramètres",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  isMobile?: boolean;
}

export function Sidebar({ isMobile = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn(
      "flex h-full flex-col border-r bg-card",
      isMobile ? "w-full" : "w-64"
    )}>
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <ShoppingBag className="h-6 w-6" />
          <span>EcoMetric</span>
        </Link>
        {isMobile && (
          <Button variant="ghost" size="icon" className="ml-auto">
            <X className="h-5 w-5" />
            <span className="sr-only">Fermer</span>
          </Button>
        )}
      </div>
      <ScrollArea className="flex-1">
        <div className="py-2">
          <nav className="grid gap-1 px-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <Button variant="outline" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Déconnexion
        </Button>
      </div>
    </div>
  );
}