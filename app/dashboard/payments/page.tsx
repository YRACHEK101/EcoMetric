'use client';

import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const PaymentsPage = () => {
  // Mock data - replace with actual data fetching
  const payments = [
    {
      id: "INV-001",
      date: "2025-03-04",
      amount: "$234.00",
      status: "completed",
      method: "Credit Card",
      customer: "John Doe"
    },
    // Add more mock payments as needed
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payments</h1>
        <div className="flex gap-4">
          <Card className="p-4 bg-green-50">
            <p className="text-sm text-green-600">Total Revenue</p>
            <p className="text-2xl font-bold text-green-700">$12,345</p>
          </Card>
          <Card className="p-4 bg-blue-50">
            <p className="text-sm text-blue-600">Pending Payments</p>
            <p className="text-2xl font-bold text-blue-700">5</p>
          </Card>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.customer}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Badge 
                    variant={payment.status === "completed" ? "default" : "secondary"}
                    className={
                      payment.status === "completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default PaymentsPage;