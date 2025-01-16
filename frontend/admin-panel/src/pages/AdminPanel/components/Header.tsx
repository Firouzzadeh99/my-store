import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Bell, Settings, Edit, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
   return (
    <div className="w-full flex justify-end items-center bg-white  h-14 p-4">
      <div className="flex justify-center items-center gap-6">
        <div>
          <Settings size={19} color="gray" />
        </div>
        <div>
          <Bell size={19} color="gray" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-9 h-9 cursor-pointer">
              <AvatarImage src={user?.profile || ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="start">
            <DropdownMenuLabel className="text-center">
              {user?.username}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="w-full my-1 flex justify-between items-center gap-2">
              <Edit size={16} className="text-gray-500" />
              <span>ویرایش پروفایل</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="w-full flex justify-between items-center gap-2"
            >
              <LogOut size={16} className="text-gray-500" />
              <span>خروج</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
