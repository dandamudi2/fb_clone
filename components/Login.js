import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://www.loginradius.com/blog/static/a9dad0fc4bf1af95243aa5e2d017bc22/a8669/google_cover.jpg"
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
      />
      <h1
        onClick={signIn}
        className="p-5 mt-2 bg-blue-500 rounded-full text-white text-center 
                    cursor-pointer"
      >
        Login with Google
      </h1>
    </div>
  );
}

export default Login;
