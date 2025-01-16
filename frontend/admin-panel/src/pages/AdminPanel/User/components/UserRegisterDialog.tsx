import DatePickerField from "@/components/modules/DatePickerField";
import InputField from "@/components/modules/InputField";
import SelectField from "@/components/modules/SelectField";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useAddUser, useEditUser } from "../_queries";
import { useQueryClient } from "@tanstack/react-query";
import { IUser } from "@/types/user.interface";
type FormType = {
  fullName: string;
  email: string;
  birthday: string;
  status: "active" | "deactive" | "";
  username: string;
  password: string;
  profile: string;
};

const userSchema = z.object({
  fullName: z.string().nonempty("نام و نام خانوادگی الزامی است."),
  email: z.string().email("فرمت ایمیل صحیح نیست."),
  birthday: z.string().nonempty("تاریخ تولد الزامی است."),
  status: z.enum(["active", "deactive"], {
    errorMap: () => ({ message: "وضعیت را انتخاب کنید." }),
  }),
  username: z.string().nonempty("نام کاربری الزامی است."),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
  profile: z.string().url("فرمت آدرس پروفایل صحیح نیست."),
});

function UserRegisterDialog({
  open,
  handleClose,
   editData,
}: {
  handleClose: (open: boolean) => void;
   editData: IUser | null;
  open: boolean;
}) {
  const { toast } = useToast();
  const editUser = useEditUser();
  const addUser = useAddUser();
  const queryClient = useQueryClient();

  const form = useForm<FormType>({
    resolver: zodResolver(userSchema),
  });


  const onSubmit = async (values: FormType) => {
       if (editData) {
        editUser.mutate(
          { data: {...values, id: editData.id} },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({queryKey: ["users"]});
              toast({
                duration: 2000,
                title: "کاربر با موفقیت ویرایش شد",
                variant: "success",
              });
            },
            onError:() => {
              toast({
                duration: 3000,
                title: "خطا در ویرایش کاربر",
                description: "لطفاً مجدداً تلاش کنید.",
                variant: "error",
              });
            }
          }
        );
      } else {
        addUser.mutate(
          { data: values },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({queryKey: ["users"]});
              toast({
                duration: 2000,
                title: "کاربر با موفقیت ایجاد شد",
                variant: "success",
              });
            },
            onError:() => {
              toast({
                duration: 3000,
                title: "خطا در ثبت کاربر",
                description: "لطفاً مجدداً تلاش کنید.",
                variant: "error",
              });
            }
          }
        );
        
      }
      handleClose(false);
       form.reset();
    
  };

  useEffect(() => {
    form.reset({
      fullName: editData?.fullName || "",
      email: editData?.email || "",
      birthday: editData?.birthday || "",
      status: editData?.status || "",
      username: editData?.username || "",
      password: editData?.password || "",
      profile: editData?.profile || "",
    });
  }, [editData, form]);
  return (
    <Dialog open={open} onOpenChange={()=>{
      handleClose(false)
      form.reset();
    }}>
      <DialogContent className="w-[380px] lg:w-[600px] h-[500px]">
        <DialogTitle className="text-center">ایجاد کاربر جدید</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-3 grid grid-cols-2"
          >
            <InputField
              name="fullName"
              form={form}
              placeholder="نام و نام خانوادگی"
              label="نام و نام خانوادگی"
            />
            <InputField
              name="email"
              form={form}
              placeholder="آدرس ایمیل"
              label="آدرس ایمیل"
            />
            <InputField
              name="username"
              form={form}
              placeholder="نام کاربری"
              label="نام کاربری"
            />
            <InputField
              name="password"
              form={form}
              placeholder="رمز عبور"
              label="رمز عبور"
            />
            <InputField
              name="profile"
              form={form}
              placeholder="آدرس پروفایل"
              label="آدرس پروفایل"
            />
            <SelectField
              name="status"
              form={form}
              placeholder="وضعیت کاربر"
              label="وضعیت"
              options={[
                { label: "انتخاب کنید", value: null },
                { label: "فعال", value: "active" },
                { label: "غیرفعال", value: "deactive" },
              ]}
            />
            <DatePickerField form={form} name="birthday" label="تاریخ تولد" />
            <DialogFooter className="flex items-center gap-2.5">
              <DialogClose>
                <Button variant="secondary" size="sm" type="button">
                  انصراف
                </Button>
              </DialogClose>
              <Button className="bg-green-500 hover:bg-green-600" type="submit">
                ثبت
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default UserRegisterDialog;
