"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import InputField from "@/components/ui/InputField";
import CheckboxField from "@/components/ui/CheckboxField";
import Container from "@/components/ui/Container";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux";
import { setAuthToken } from "@/redux/slices/authSlice";
const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  terms: z.boolean().refine((val) => val, "You must accept terms and conditions."),
});

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()
  const {token} = useSelector((state: RootState) => state.auth)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "", terms: false },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    dispatch(setAuthToken("ghssjhsj"))
    router.push("/dashboard")
  };

  return (
    <Container>
      <div className="h-[100vh] flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto mt-10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-lg">Login{token}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <InputField name="username" label="Username" placeholder="Enter your username" control={form.control} />
                <InputField name="password" label="Password" type="password" placeholder="Enter your password" control={form.control} />
                <CheckboxField name="terms" label="Accept Terms & Conditions" control={form.control} />
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
