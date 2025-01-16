import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import axios from "axios";
import InputField from "@/components/modules/InputField";
import { useAuth } from "@/context/AuthContext";
import { IUser } from "@/types/user.interface";
type FormType = {
  username: string;
  password: string;
};
function Login() {
  const navigation = useNavigate();
  const { toast } = useToast();
  const { setUser } = useAuth();

  const form = useForm<FormType>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (values: FormType) => {
    const { username, password } = values;
    axios.get(`http://localhost:3001/users`).then((res) => {
      const userData: IUser = res.data.find(
        (user: any) => user.username === username && user.password === password
      );
      if (userData) {
        // Store user data in local storage and in context
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        toast({
          duration: 2000,
          title: "با موفقیت وارد حساب کاربری خود شده اید.",
          variant: "success",
        });
        navigation(`/dashboard`);
      } else {
        toast({
          duration: 2000,
          title: "نام کاربری یا رمز عبور اشتباه است",
          variant: "error",
        });
      }
      form.reset();
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-md text-center">
           ورود با نام کاربری 
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" gap-3 grid py-6 px-4"
          >
            <InputField
              name="username"
              form={form}
              placeholder="نام کاربری"
              label="نام کاربری"
            />
            <div className="my-2">
              <InputField
                name="password"
                form={form}
                placeholder="پسورد"
                label="پسورد"
              />
            </div>

            <Button className="bg-green-500 hover:bg-green-600" type="submit">
              {"ثبت"}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
