"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function BtnClark() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <Link href="/sign-in" className="text-white mx-10 cursor-pointer">
        Iniciar Sesion
      </Link>
    );
  }
  return <UserButton afterSignOutUrl="/" />;
}

export default BtnClark;
