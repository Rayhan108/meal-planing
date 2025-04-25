'use client';
import Link from 'next/link';

import logo from '@/asset/logo.png';
import { MapPinHouse, FolderCog } from 'lucide-react';
import Image from 'next/image';
import { useAppSelector } from '@/redux/hooks';
import {  selectCurrentUser } from '@/redux/feature/auth/authSlice';


const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = useAppSelector(selectCurrentUser);
  // const token = useAppSelector(selectCurrentToken);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!token) {
  //     router.push('/login');
  //   }
  // }, [token, router]);

  // if (!token) {
  //   return null; // or a loading spinner
  // }

  const isCustomer = user?.role === 'customer';

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-[#F37975] min-h-screen">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mt-5">
          <div>
            <Image
              src={logo || '/placeholder.svg'}
              alt="logo"
              width={500}
              height={500}
              className="w-[150px]"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {isCustomer ? (
              <>
                <li>
                  <Link
                    href="/trackOrder"
                    className="flex items-center p-2 text-white hover:bg-orange-700 rounded-md"
                  >
                    <MapPinHouse className="h-5 w-5 mr-3" />
                    <span>Track Order</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/managePreferences"
                    className="flex items-center p-2 text-white hover:bg-orange-700 rounded-md"
                  >
                    <FolderCog className="h-5 w-5 mr-3" />
                    <span>Manage Preferences</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/viewOrder"
                    className="flex items-center p-2 text-white hover:bg-orange-700 rounded-md"
                  >
                    <MapPinHouse className="h-5 w-5 mr-3" />
                    <span>View Order</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/respondOrder"
                    className="flex items-center p-2 text-white hover:bg-orange-700 rounded-md"
                  >
                    <FolderCog className="h-5 w-5 mr-3" />
                    <span>Respond To Order</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mealMenu"
                    className="flex items-center p-2 text-white hover:bg-orange-700 rounded-md"
                  >
                    <FolderCog className="h-5 w-5 mr-3" />
                    <span>Create Meal</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-col items-center w-full p-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
