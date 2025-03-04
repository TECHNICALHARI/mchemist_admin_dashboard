import { Bell, Moon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AppHeader() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        <Input placeholder="Search here..." className="pl-10 w-80" />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        <Button variant="ghost">
          <Bell size={20} />
        </Button>
        <Button variant="ghost">
          <Moon size={20} />
        </Button>
        <Button variant="ghost">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </Button>
      </div>
    </header>
  );
}
