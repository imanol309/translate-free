"use client";
import { UserButton, useUser } from "@clerk/nextjs";

function BtnClark() {
  const { isSignedIn, user } = useUser();
  console.log(user);

  if (!isSignedIn) {
    return <h4 className="text-white mx-10">Iniciar Sesion</h4>;
  }
  return <UserButton afterSignOutUrl="/" />;
}

export default BtnClark;
