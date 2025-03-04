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
    id: "ORD-7352",
    customer: "John Smith",
    date: "2025-02-14",
    total: "$129.99",
    status: "Delivered",
  },
  {
    id: "ORD-7353",
    customer: "Sarah Johnson",
    date: "2025-02-14",
    total: "$259.98",
    status: "Processing",
  },
  {
    id: "ORD-7354",
    customer: "Michael Brown",
    date: "2025-02-13",
    total: "$89.99",
    status: "Shipped",
  },
  {
    id: "ORD-7355",
    customer: "Emily Davis",
    date: "2025-02-13",
    total: "$199.99",
    status: "Pending",
  },
  {
    id: "ORD-7356",
    customer: "David Wilson",
    date: "2025-02-12",
    total: "$149.99",
    status: "Delivered",
  },
];

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Manage your recent customer orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
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
                  <Badge
                    variant={
                      order.status === "Delivered"
                        ? "default"
                        : order.status === "Shipped"
                        ? "secondary"
                        : order.status === "Processing"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View
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