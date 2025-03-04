import { Bell, Moon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

export default function AppHeader() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
                <Button variant="ghost">
                    <Bell size={20} />
                </Button>
                <Button variant="ghost">
                    <Moon size={20} />
                </Button>

                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className="outline-none focus:ring-0 focus:outline-none ">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="User"
                                    className="w-8 h-8 rounded-full"
                                />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                Profile
                            </MenubarItem>
                            <MenubarItem>Setting</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Logout</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}
