import { Package, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "PROD-1",
    name: "Casque Sans Fil",
    category: "Électronique",
    price: "129,99 €",
    stock: 45,
    status: "En Stock",
  },
  {
    id: "PROD-2",
    name: "Montre Connectée",
    category: "Électronique",
    price: "199,99 €",
    stock: 28,
    status: "En Stock",
  },
  {
    id: "PROD-3",
    name: "Sac à Dos pour Ordinateur",
    category: "Accessoires",
    price: "59,99 €",
    stock: 12,
    status: "Stock Faible",
  },
  {
    id: "PROD-4",
    name: "Enceinte Bluetooth",
    category: "Électronique",
    price: "79,99 €",
    stock: 0,
    status: "Rupture de Stock",
  },
  {
    id: "PROD-5",
    name: "Bracelet Connecté",
    category: "Électronique",
    price: "89,99 €",
    stock: 34,
    status: "En Stock",
  },
];

export function ProductInventory() {
  const getVariant = (status: string) => {
    switch (status) {
      case "En Stock":
        return "default";
      case "Stock Faible":
        return "outline";
      case "Rupture de Stock":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl">Inventaire des Produits</CardTitle>
          <CardDescription>Gérez votre inventaire de produits</CardDescription>
        </div>
        <Button>
          <Package className="mr-2 h-4 w-4" />
          Ajouter un Produit
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produit</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead>Prix</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Badge variant={getVariant(product.status)}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" title="Modifier">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Supprimer">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}