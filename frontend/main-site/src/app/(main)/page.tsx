import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="min-h-screen">
      <div className="h-8">
        <div className="container mx-auto py-2 px-2 text-black flex justify-between items-center">
          <div className="flex gap-3 text-green-500 ">
            <div>خانه </div>
            <div>محصولات</div>
            <div>درباره ما</div>
          </div>
          <Link href={"/signIn"} className="bg-green-400 rounded-md px-2 py-2">ثبت نام / ورود</Link>
        </div>
      </div>
      <div className="text-black container mx-auto pt-8 flex gap-6">
         <div className="w-32 h-32 bg-green-400 rounded-lg flex justify-center items-center text-sm">
                    محصول اول
         </div>
         <div className="w-32 h-32 bg-green-400 rounded-lg flex justify-center items-center text-sm">
                   محصول دوم
         </div>
         <div className="w-32 h-32 bg-green-400 rounded-lg flex justify-center items-center text-sm">
                    محصول سوم
         </div>
      </div>
    </div>
  );
}

export default page;
