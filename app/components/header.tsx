import {
    SignedOut,
    SignInButton,
    SignUpButton,
    SignedIn,
    UserButton
  } from "@clerk/nextjs";
  import React from "react";
  
  const Header: React.FC = () => {
    return (
      <div>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    );
  };
  
  export default Header;
  