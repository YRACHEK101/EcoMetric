import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const orders = [
  {
    id: "CMD-7352",
    customer: "Jean Dupont",
    date: "14/02/2025",
    total: "129,99 €",
    status: "Livré",
  },
  {
    id: "CMD-7353",
    customer: "Sarah Martin",
    date: "14/02/2025",
    total: "259,98 €",
    status: "En cours",
  },
  {
    id: "CMD-7354",
    customer: "Michel Brun",
    date: "13/02/2025",
    total: "89,99 €",
    status: "Expédié",
  },
  {
    id: "CMD-7355",
    customer: "Emma Davis",
    date: "13/02/2025",
    total: "199,99 €",
    status: "En attente",
  },
  {
    id: "CMD-7356",
    customer: "David Wilson",
    date: "12/02/2025",
    total: "149,99 €",
    status: "Livré",
  },
];

export function RecentOrders() {
  const getVariant = (status: string) => {
    switch (status) {
      case "Livré":
        return "default";
      case "Expédié":
        return "secondary";
      case "En cours":
        return "outline";
      default:
        return "destructive";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Commandes Récentes</CardTitle>
        <CardDescription>Gérez vos commandes clients récentes</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>N° Commande</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge variant={getVariant(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    Voir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}