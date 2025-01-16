import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  code: z.string().min(4, {
    message: "کد تایید را وارد کنید.",
  }),
});

function Verify() {
  const { toast } = useToast();
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    if (data.code) {
      toast({
        duration: 2000,
        title: "با موفقیت وارد حساب کاربری خود شده اید",
        variant: "success",
      });
      navigate("/dashboard")
    }
  }

  return (
    <div
      dir="ltr"
      className="w-full min-h-screen flex justify-center items-center bg-gray-50"
    >
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-md text-center">
            ورود با شماره تاتن
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="w-full flex justify-center items-center flex-col">
                    <FormLabel className="  w-full text-center">
                      02:00
                    </FormLabel>
                    <FormControl>
                      <InputOTP autoFocus maxLength={4} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      لطفا کد تایید ارسال شده را وارد نمایید
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">
                تایید
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Verify;
