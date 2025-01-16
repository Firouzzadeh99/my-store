import { LayoutDashboard, Users, Plus, List, Settings } from "lucide-react";

export const adminSidebarItems = [
    {
      title: "داشبورد",
      url: "/dashboard/",
      icon: LayoutDashboard,
    },
    {
      title: "مدیریت کاربران",
      icon: Users,
      children: [
        {
          title: "لیست کاربران",
          url: "/dashboard/users",
          icon: List,
        },
      ],
    },
    {
      title: "تنظیمات",
      icon: Settings,
      children: [
        {
          title: "ایجاد کاربر جدید",
          url: "/new-user",
          icon: Plus,
        },
        {
          title: "لیست کاربران",
          url: "/user-list",
          icon: List,
        },
      ],
    },
  ];