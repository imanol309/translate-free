"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function BtnClark() {
  const { isSignedIn, user } = useUser();
  console.log(user?.fullName);
  if (!isSignedIn) {
    return (
      <Link href="/sign-in" className="text-white mx-10 cursor-pointer">
        Iniciar Sesion
      </Link>
    );
  }
  return (
    <div className="flex justify-center items-center gap-3 cursor-pointer">
      <UserButton afterSignOutUrl="/" />
      <h4>{user?.fullName}</h4>
    </div>
  );
}

export default BtnClark;
