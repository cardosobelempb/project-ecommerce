"use client";
import { LogInIcon, LogOutIcon, MenuIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";

import BrandRoot from "../brand-root";

export default function HeaderRoot() {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex items-center justify-between p-5">
      <BrandRoot />
      <div className="flex items-center gap-x-3">
        <Button variant={"outline"} size={"icon"}>
          <ShoppingBag className="" />
        </Button>
        <span className="text-gray-300">|</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <MenuIcon className="" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="px-6">
              {session?.user ? (
                <>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={session?.user.image || undefined} />
                        <AvatarFallback>
                          {session?.user.name?.charAt(0).toUpperCase()}
                          {session?.user.name?.charAt(1).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span>{session?.user.name}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => authClient.signOut()}
                      size="icon"
                      variant={"outline"}
                    >
                      <LogOutIcon />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between">
                  <h2>Olá. Faça seu login!</h2>
                  <Button size="icon" variant="outline">
                    <Link href="/authentication">
                      <LogInIcon />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
