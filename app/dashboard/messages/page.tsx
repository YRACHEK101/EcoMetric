'use client';

import React, { useState } from 'react';
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Mail, MailOpen, Trash2, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MessagesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with actual data fetching
  const messages = [
    {
      id: "1",
      sender: "John Doe",
      subject: "Order Confirmation #123",
      preview: "Thank you for your recent order...",
      date: "2025-03-04",
      status: "unread",
    },
    {
      id: "2",
      sender: "Support Team",
      subject: "Your Ticket #456",
      preview: "We've received your support request...",
      date: "2025-03-03",
      status: "read",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Messages</h1>
          <div className="flex gap-4">
            <Card className="p-4 bg-blue-50">
              <p className="text-sm text-blue-600">New Messages</p>
              <p className="text-2xl font-bold text-blue-700">3</p>
            </Card>
            <Card className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold text-gray-700">12</p>
            </Card>
          </div>
        </div>

        <div className="flex gap-4 items-center mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">Mark All as Read</Button>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <Card key={message.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {message.status === "unread" ? (
                    <Mail className="h-5 w-5 text-blue-500" />
                  ) : (
                    <MailOpen className="h-5 w-5 text-gray-500" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{message.sender}</h3>
                      {message.status === "unread" && (
                        <Badge variant="default" className="bg-blue-100 text-blue-800">
                          New
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-900">{message.subject}</p>
                    <p className="text-sm text-gray-500">{message.preview}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{message.date}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <MailOpen className="mr-2 h-4 w-4" /> Mark as Read
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;