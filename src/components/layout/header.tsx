"use client"
import { Bell, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { useDispatch} from "react-redux";
import { AppDispatch} from "@/redux";
import { handleLogout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function AppHeader() {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter()
    const logout = () => {
        dispatch(handleLogout())
        router.push("/login")
    }
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
                            <MenubarItem onClick={logout}>Logout</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}
