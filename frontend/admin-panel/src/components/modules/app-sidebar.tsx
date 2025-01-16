import { ChevronDown } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { adminSidebarItems } from "@/pages/AdminPanel/components/sidebarItems";

 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white"> </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel>داشبورد ادمین</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminSidebarItems.map((item) => (
                <SidebarMenuItem className="my-1" key={item.title}>
                  {item.children ? (
                    <Collapsible
                      defaultOpen={false}
                      className="group/collapsible"
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon className="mr-2" />
                          <div className="w-full flex justify-between">
                            <span>{item.title}</span>
                            <span>
                              <ChevronDown size={19} />
                            </span>
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((child) => (
                            <SidebarMenuSubItem key={child.title}>
                              <SidebarMenuButton asChild>
                                <a href={child.url}>
                                  <child.icon className="mr-2" />
                                  <span>{child.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
