import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { User } from "lucide-react";
  export default function Profile(){
    return(
      <ClerkProvider>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <User size={20} />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <User size={20} />
          </Button>
        </UserButton>
      </SignedIn>
    </ClerkProvider>
    )
  }
  