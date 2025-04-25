"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Image from "next/image";
import logo from "@/asset/logo.png";
import style from "@/app/styles.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/feature/auth/authSlice";
import toast from "react-hot-toast";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [kidsClubDropdownOpen, setKidsClubDropdownOpen] = useState(false);
  // const [kidsClubMobileDropdownOpen, setKidsClubMobileDropdownOpen] =
  //   useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const user = useAppSelector(selectCurrentUser);

  const isCustomer = user?.role === "customer";
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  console.log(user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
    toast.success("Logout Success");
  };
  // Handle clicks outside the dropdowns
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (profileDropdownOpen && !event.target.closest(".profile-dropdown")) {
        setProfileDropdownOpen(false);
      }
      if (
        kidsClubDropdownOpen &&
        !event.target.closest(".kids-club-dropdown")
      ) {
        setKidsClubDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileDropdownOpen, kidsClubDropdownOpen]);

  return (
    <header className="w-full bg-gradient-to-r from-[#f08080] to-[#ffeb99] px-4 py-1  md:px-10 ">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative ">
            <Image
              src={logo || "/placeholder.svg"}
              alt="logo"
              width="500"
              height="500"
              className="w-[200px]"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center space-x-1 py-5  lg:space-x-5 font-bold drop xl:space-x-6">
          <Link
            href="/"
            className={`md:text-sm uppercase text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}
          >
            Home
          </Link>
          <Link
            href="/findMeals"
            className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}
          >
            FIND MEALS
          </Link>

          {isCustomer && (
            <Link
              href="/orderMeal"
              className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}
            >
              ORDER MEAL
            </Link>
          )}
          <Link
            href={isCustomer ? "/trackOrder" : "/viewOrder"}
            className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}
          >
            DASHBOARD
          </Link>
        </nav>

        {/* User Profile and lOGIN */}
        <div className="hidden lg:flex lg:space-x-1 items-center space-x-3">
          {!user && (
            <Link href="/login">
              <button className="h-12 rounded-full bg-[#F37975] font-bold px-8 text-lg hover:bg-[#e57373] text-white">
                Log In
              </button>
            </Link>
          )}
          {user && (
            <div className="relative profile-dropdown">
              <button
                className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                My Profile
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-md rounded-md z-10">
                  <Link
                    href="/my-profile"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit Profile
                  </Link>

                  <div className="border-t border-gray-200 my-1"></div>
                  <button
                    onClick={() => handleLogout()}
                    className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button className="lg:hidden block" onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
        </button>

        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          width="100vw" // full screen width
          styles={{
            header: { background: "rgba(242, 127, 122, 0.8)" }, // 85% transparent
            body: { background: "rgba(242, 127, 122, 0.8)", height: "100vh" },
          }}
        >
          <div className="flex flex-col justify-center items-center space-y-5 pt-0">
            <p
              className={`text-[#FAF397] tracking-widest font-bold text-sm uppercase ${style.fontJosefin}`}
            >
              Our Story
            </p>
            <Link
              href="/"
              onClick={onClose}
              className={`md:text-sm text-sm xl:text-xl uppercase  text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/" ? "text-yellow-400" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/findMeals"
              onClick={onClose}
              passHref
              className={`md:text-sm text-sm xl:text-xl  text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/findMeals" ? "text-yellow-400" : ""} `}
            >
              FIND MEALS
            </Link>
            <Link
              href="/orderMeal"
              onClick={onClose}
              passHref
              className={`md:text-sm text-sm xl:text-xl  text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/orderMeal" ? "text-yellow-400" : ""}`}
            >
              ORDER MEAL
            </Link>
            <Link
              href="/dasboard"
              onClick={onClose}
              passHref
              className={`md:text-sm text-sm xl:text-xl  text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/dashboard" ? "text-yellow-400" : ""}`}
            >
              DASHBOARD
            </Link>

            <p
              className={`text-[#FAF397] tracking-widest font-bold text-sm uppercase ${style.fontJosefin}`}
            >
              More
            </p>

            <div className="flex justify-center items-center  gap-3">
              <div className="flex justify-center items-center gap-3">
                {user ? (
                  <button
                    onClick={() => handleLogout}
                    className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                  >
                    Logout
                  </button>
                ) : (
                  <Link href="/login" onClick={onClose} passHref>
                    <button
                      className={`py-3 w-[100px] md:w-[120px] font-bold uppercase border-none bg-white text-[#f08080] hover:bg-white/90 rounded-full ${style.fontJosefin}`}
                    >
                      Log In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
}
