import { DataTable } from "@/components/modules/DataTable/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContentTitle from "@/components/ui/ContentTitle";
import { ColumnDef } from "@tanstack/react-table";
import { PlusCircle, User } from "lucide-react";
import { useMemo, useState } from "react";
import UserRegisterDialog from "./components/UserRegisterDialog";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { convertToJalali } from "@/utils/functions";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import DeleteDialog from "@/components/modules/DeleteDialog";
import { useGetAllUsers } from "./_queries";
import { IUser } from "@/types/user.interface";

export default function index() {
  const { toast } = useToast();

  const [isOpenModal, setIsOpenModal] = useState<{
    deleteModal: boolean;
    editModal: boolean;
  }>({ deleteModal: false, editModal: false });
  const [userData, setUserData] = useState<IUser | null>(null);
  const { data, isLoading, refetch } = useGetAllUsers();
  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "row_number",
      header: "ردیف",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "profile",
      header: "تصویر پروفایل",

      cell: (info) => {
        const profileUrl = info.getValue<string>();
        const userName = info.row.original.fullName;

        return (
          <Avatar>
            {profileUrl ? (
              <AvatarImage src={profileUrl} alt={`${userName} تصویر پروفایل`} />
            ) : (
              <AvatarFallback>
                {userName?.[0]?.toUpperCase() || "?"}
              </AvatarFallback>
            )}
          </Avatar>
        );
      },
    },
    {
      accessorKey: "fullName",
      header: "نام",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "birthday",
      header: "تاریخ تولد",
      cell: (info) => convertToJalali(`${info.getValue()}` || ""),
    },
    {
      accessorKey: "email",
      header: "ایمیل",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "status",
      header: "وضعیت",
      cell: (info) => {
        return info.getValue() === "active" ? (
          <Badge variant="success">فعال</Badge>
        ) : (
          <Badge variant="destructive" color="green">
            غیر فعال
          </Badge>
        );
      },
    },
    {
      id: "actions",
      header: "عملیات",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              setUserData(row.original as IUser);
              setIsOpenModal((prev) => {
                return { ...prev, editModal: true };
              });
            }}
          >
            ویرایش
          </button>
          <button
            onClick={() => {
              setUserData(row.original as IUser);
              setIsOpenModal((prev) => {
                return { ...prev, deleteModal: true };
              });
            }}
            className="text-red-500 hover:underline"
          >
            حذف
          </button>
        </div>
      ),
    },
  ];
  const handleDelete = () => {
    axios.delete(`http://localhost:3001/users/${userData?.id}`).then(() => {
      refetch();
      toast({
        duration: 2000,
        title: "کاربر با موفقیت حذف شد",
        variant: "success",
      });
      setIsOpenModal((prev) => {
        return { ...prev, deleteModal: false };
      });
      setUserData(null);
    });
  };
  const handlePageChange = (page: number) => {
    console.log(page);
  };
  const usersData: IUser[] = useMemo(() => {
    if (!data) return [];
    return data.map((data: IUser, idx: number) => ({
      ...data,
      row_number: idx + 1,
      birthday: data.birthday,
    }));
  }, [data]);

  return (
    <div>
      <ContentTitle icon={<User size={18} />} title="مدیریت کاربران" />
      <div className="flex flex-col gap-y-4">
        <Button
          onClick={() => {
            setUserData(null);
            setIsOpenModal((prev) => {
              return { ...prev, editModal: true };
            });
          }}
          className="mr-auto w-32 bg-green-500 hover:bg-green-600"
        >
          <PlusCircle /> ایجاد کاربر
        </Button>
        <DataTable
          columns={columns}
          data={usersData}
          isLoading={isLoading}
          currentPage={1}
          totalPages={1}
          onPageChange={handlePageChange}
        />
        <UserRegisterDialog
          open={isOpenModal.editModal}
          editData={userData}
          handleClose={() => {
            setUserData(null);
            setIsOpenModal((prev) => {
              return { ...prev, editModal: !isOpenModal.editModal };
            });
          }}
        />
        <DeleteDialog
          isDialogOpen={isOpenModal.deleteModal}
          setIsDialogOpen={() => {
            setIsOpenModal((prev) => {
              return { ...prev, deleteModal: false };
            });
          }}
          name="کاربر"
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
