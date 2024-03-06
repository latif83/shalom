"use client";

import { Login } from "@/components/admin/login/Login";
import { useLogin } from "@/providers/LoginContext";

// export const metadata = {
//   title: "Shalom Prayer Ministry | Admin Page",
//   description: "MPAEBO FIE",
// };

export default function RootLayout({ children }) {
  const { loggedIn } = useLogin();
  return <div>{loggedIn ?  children : <Login />}</div>;
}
