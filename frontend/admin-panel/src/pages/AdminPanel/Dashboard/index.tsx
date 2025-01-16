import { Card } from "@/components/ui/card";
import ContentTitle from "@/components/ui/ContentTitle";
import { LayoutDashboard } from "lucide-react";

function Dashboard() {
  return (
    <>
      <div>
        <ContentTitle icon={<LayoutDashboard size={16} />} title="داشبورد" />
        <div className="w-full grid grid-cols-6 gap-2">
          <div className="flex flex-wrap gap-3 col-span-2">
            <Card className="h-32 w-[150px] p-2 flex flex-col gap-5">
              <p className="text-sm text-center">تعداد محصولات</p>
              <span className="text-xs "> 250,000 </span>
              <p className="text-xs text-green-400"> 25% افزایش</p>
            </Card>
            <Card className="h-32 w-[150px] p-2 flex flex-col gap-5">
              <p className="text-sm text-center">میزان فروش</p>
              <span className="text-xs "> 250,000 </span>
              <p className="text-xs text-green-400"> 25% افزایش</p>
            </Card>
            <Card className="h-32 w-[150px] p-2 flex flex-col gap-5">
              <p className="text-sm text-center">تعداد محصولات</p>
              <span className="text-xs "> 250,000 </span>
              <p className="text-xs text-green-400"> 25% افزایش</p>
            </Card>
            <Card className="h-32 w-[150px] p-2 flex flex-col gap-5">
              <p className="text-sm text-center">تعداد محصولات</p>
              <span className="text-xs "> 250,000 </span>
              <p className="text-xs text-green-400"> 25% افزایش</p>
            </Card>
          </div>
          <div className="col-span-4">
            <Card className="w-full h-full"> </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
