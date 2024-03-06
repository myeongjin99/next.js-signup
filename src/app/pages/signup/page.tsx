import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>SIGN UP</CardTitle>
        <CardDescription>Please fill in all the blanks.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="홍길동" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="id">ID</Label>
              <Input id="id" placeholder="ID" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">PW</Label>
              <Input id="password" placeholder="password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmpassword">CONFIRM PW</Label>
              <Input id="confirmpassword" placeholder="ID" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">CANCEL</Button>
        <Button>NEXT</Button>
      </CardFooter>
    </Card>
  );
}
