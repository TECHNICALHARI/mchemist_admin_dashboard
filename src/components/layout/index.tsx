import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./sidebar";
import AppHeader from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        {/* Sidebar Section */}
        <div className="flex">
          <AppSidebar />
          <SidebarTrigger className="p-2 border-r bg-white" />
        </div>

        {/* Main Section */}
        <div className="flex-1 flex flex-col w-full">
          {/* Header */}
          <AppHeader />

          {/* Page Content */}
          <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
