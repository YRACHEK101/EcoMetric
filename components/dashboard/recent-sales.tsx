import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SaleProps {
  name: string;
  email: string;
  amount: string;
  avatarSrc?: string;
  avatarFallback: string;
}

function Sale({ name, email, amount, avatarSrc, avatarFallback }: SaleProps) {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="ml-auto font-medium">{amount}</div>
    </div>
  );
}

export function RecentSales() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <Sale
            name="Olivia Martin"
            email="olivia.martin@email.com"
            amount="+$1,999.00"
            avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            avatarFallback="OM"
          />
          <Sale
            name="Jackson Lee"
            email="jackson.lee@email.com"
            amount="+$39.00"
            avatarSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            avatarFallback="JL"
          />
          <Sale
            name="Isabella Nguyen"
            email="isabella.nguyen@email.com"
            amount="+$299.00"
            avatarSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            avatarFallback="IN"
          />
          <Sale
            name="William Kim"
            email="will.kim@email.com"
            amount="+$99.00"
            avatarSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            avatarFallback="WK"
          />
          <Sale
            name="Sofia Davis"
            email="sofia.davis@email.com"
            amount="+$39.00"
            avatarSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            avatarFallback="SD"
          />
        </div>
      </CardContent>
    </Card>
  );
}