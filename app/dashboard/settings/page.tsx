'use client';

import React, { useState } from 'react';
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Store,
} from "lucide-react";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    orders: true,
    marketing: false
  });

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Paramètres</h1>
        </div>

        <Tabs defaultValue="account" className="space-y-4">
          <TabsList className="grid grid-cols-5 gap-4 bg-muted p-1">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Compte
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Sécurité
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Facturation
            </TabsTrigger>
            <TabsTrigger value="store" className="flex items-center gap-2">
              <Store className="h-4 w-4" />
              Boutique
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Informations du Compte</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Dupont" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jean@exemple.fr" />
                </div>
                <Button>Enregistrer les modifications</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Préférences de Notification</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email">Notifications par email</Label>
                  <Switch
                    id="email"
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications(prev => ({ ...prev, email: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push">Notifications push</Label>
                  <Switch
                    id="push"
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications(prev => ({ ...prev, push: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="orders">Notifications de commandes</Label>
                  <Switch
                    id="orders"
                    checked={notifications.orders}
                    onCheckedChange={(checked) =>
                      setNotifications(prev => ({ ...prev, orders: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing">Notifications marketing</Label>
                  <Switch
                    id="marketing"
                    checked={notifications.marketing}
                    onCheckedChange={(checked) =>
                      setNotifications(prev => ({ ...prev, marketing: checked }))
                    }
                  />
                </div>
                <Button>Enregistrer les préférences</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Paramètres de Sécurité</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button>Mettre à jour le mot de passe</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Paramètres de Facturation</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Moyens de paiement</h3>
                  <div className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-500">Expire le 04/2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Modifier</Button>
                  </div>
                  <Button variant="outline" className="w-full">Ajouter un moyen de paiement</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-medium">Adresse de facturation</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input id="address" placeholder="123 rue Principale" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Paris" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Région</Label>
                      <Input id="state" placeholder="Île-de-France" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Code postal</Label>
                      <Input id="zipCode" placeholder="75001" />
                    </div>
                  </div>
                  <Button>Mettre à jour l'adresse</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="store">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Paramètres de la Boutique</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Informations de la boutique</h3>
                  <div className="space-y-2">
                    <Label htmlFor="storeName">Nom de la boutique</Label>
                    <Input id="storeName" placeholder="Ma Super Boutique" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storeDescription">Description de la boutique</Label>
                    <Input id="storeDescription" placeholder="Description de votre boutique" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-medium">Horaires d'ouverture</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="openTime">Heure d'ouverture</Label>
                      <Input id="openTime" type="time" defaultValue="09:00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="closeTime">Heure de fermeture</Label>
                      <Input id="closeTime" type="time" defaultValue="17:00" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-medium">Préférences de la boutique</h3>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="storeStatus">Statut de la boutique</Label>
                    <Switch id="storeStatus" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="inventory">Mise à jour automatique du stock</Label>
                    <Switch id="inventory" />
                  </div>
                </div>
                
                <Button>Enregistrer les paramètres</Button>
              </div>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;