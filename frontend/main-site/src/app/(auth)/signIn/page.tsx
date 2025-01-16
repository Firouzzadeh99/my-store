"use client";
import Image from "next/image";
import Link from "next/link";
 import { useState } from "react";
 import { useRouter } from "next/navigation";
 export default function page() {
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [mobile, setMobile] = useState<string>();
 
  return (
 <div className="min-h-screen flex justify-center items-center bg-green-100">
       <div className="container mx-auto px-10 py-4 w-[330px] h-[360px] bg-green-500 flex justify-around items-center flex-col rounded-md">
      <div className="flex gap-3 mt-6">
       <Link href={"/"}>
       <Image
          src={"/images/logo.webp"}
          width={60}
          style={{ objectFit: "contain" }}
          height={60}
          className="mt-3 rounded-lg"
          alt="logo"
        /></Link>
        <div className="flex mt-2 gap-2 flex-col">
          <p className="text-black font-bold text-[12px]">ورود / ثبت نام</p>
          <p className="text-[11px] mb-0">
            جهت ورود یا ثبت‌نام در آن، شماره موبایل خود را وارد کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <input
          className="p-2 rounded-md focus:outline-none bg-slate-300 text-sm text-black"
          value={mobile}
          placeholder="شماره موبایل"
          onChange={(event: any) => {
            setMobile(event.target.value);
          }}
        />
        <button
        //   onClick={handelSubmit}
          disabled={isLoding}
          className={`text-xs p-2.5 bg-green-800 font-bold ${isLoding ? 'text-[gray]' : "text-white"} items-center flex text-center justify-center rounded-[7px] w-auto`}
        >
          {isLoding ? "در حال درخواست" : "ثبت نام"}
        </button>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <Link href={"/"} className="text-sm">
          بازگشت
        </Link>
        <span>
          {/* <ArrowIcon width={8} height={8} className="rotate-180" /> */}
        </span>
      </div>
    </div>
 </div>
  );
}
