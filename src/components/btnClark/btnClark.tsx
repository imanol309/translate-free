"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { dark } from '@clerk/themes';

function Btnclark() {
  const { isSignedIn } = useUser();
  if (!isSignedIn) {
    return (
      <Link href="/sign-in" className="text-white font-medium text-sm mx-10 cursor-pointer bg-green-600 p-2 px-6 rounded-lg">
        Iniciar Sesión
      </Link>
    );
  }
  return (
    <div className="flex justify-center items-center gap-3 cursor-pointer">
      <UserButton
        afterSignOutUrl="/"
        showName={true}
        appearance={{
          baseTheme: dark
        }}
      />
    </div>
  );
}

export default Btnclark;
