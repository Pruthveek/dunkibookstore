import { Dropdown } from "@/components/ui/dropDown"
import { Handbag, User } from "lucide-react";
import Link from "next/link";

export function HeaderIcons() {
  return (
    <div className="flex items-center gap-6">
      <Dropdown
        trigger={
          <div className="relative group">
            <Handbag size={25} className="group-hover:text-red-600" />
            <span className="absolute -top-3 -right-2 bg-black group-hover:bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        }
      >
        <div className="p-4">
          <h2 className="text-xl text-black pb-4 mb-4 border-b border-gray-300">
           Shoping Cart
          </h2>
          <p className="text-base text-gray-600">Your cart is empty.</p>
        </div>
      </Dropdown>
      <Dropdown trigger={<User size={25} className="hover:text-red-600"/>}>
        <div className="p-4">
          <h2 className="text-xl text-black pb-4 mb-4 border-b border-gray-300">
            Account
          </h2>

          <Link href="/account/login" className="block py-1">
            Login
          </Link>
          <Link href="/account/register" className="block py-1">
            Create Account
          </Link>
        </div>
      </Dropdown>
    </div>
  );
}
