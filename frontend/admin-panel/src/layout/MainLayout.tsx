import { AppSidebar } from "@/components/modules/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminPanel from "@/pages/AdminPanel";
import AgenPanel from "@/pages/AgenPanel";

const userRole: "admin" | "agent" = "admin";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative w-full">
        <div className="absolute top-2 right-2">
        <SidebarTrigger />
        </div>
        {userRole === "admin" && <AdminPanel />}
        {userRole === "agent" && <AgenPanel />}
      </main>
    </SidebarProvider>
  );
}
