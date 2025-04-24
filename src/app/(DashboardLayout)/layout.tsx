"use client"
import Link from "next/link";
import React from "react";
import logo from "@/asset/logo.png";
import { MapPinHouse, FolderCog } from "lucide-react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/feature/auth/authSlice";
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const role = "user";
  const user = useAppSelector(selectCurrentUser)
  // console.log(user);
  const isCustomer = user?.role==="customer"
  return (
    <div className="flex ">
      {/* Sidebar */}

      <aside className="w-full md:w-80 bg-[#F37975]  min-h-screen">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mt-5">
          <div className=" ">
            <Image
              src={logo || "/placeholder.svg"}
              alt="logo"
              width="500"
              height="500"
              className="w-[150px]"
            />
          </div>
        </Link>
        {isCustomer ? (
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/trackOrder"
                  className="flex items-center p-2 text-white hover:bg-orange-700 rounded-md"
                >
                  <MapPinHouse className="h-5 w-5 mr-3 text-white" />
                  <span>Track Order</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/managePreferences"
                  className="flex items-center p-2 text-white  hover:bg-orange-700 rounded-md"
                >
                  <FolderCog className="h-5 w-5 mr-3" />
                  <span>Manage Preferences</span>
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="p-4 w-full md:w-64  min-h-screen">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/viewOrder"
                  className="flex items-center p-2 text-white  hover:bg-orange-700 rounded-md"
                >
                  <MapPinHouse className="h-5 w-5 mr-3 text-white" />
                  <span>View Order</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/respondOrder"
                  className="flex items-center p-2 text-white  hover:bg-orange-700 rounded-md"
                >
                  <FolderCog className="h-5 w-5 mr-3" />
                  <span>Respond To Order</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </aside>
      <div className="flex flex-col items-center w-full">{children}</div>
      <div></div>
    </div>
  );
};

export default DashboardLayout;
