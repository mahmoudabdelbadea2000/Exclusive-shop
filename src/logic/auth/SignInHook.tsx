import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { GlobalSchema } from "@/validation";
import { toast } from "@/components/ui/use-toast";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserCredentials } from "./userCredentials";

export function SignInHook() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { loginSchema } = GlobalSchema();
  const navigate = useNavigate();
  const user = UserCredentials();

  type userLoginValues = z.infer<typeof loginSchema>;
  const form = useForm<userLoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: userLoginValues) => {
    setIsLoading(true);
    setIsError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true);
        toast({
          title: "login failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "login failed",
          description: "An unknown error occurred",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      toast({
        title: "login successful",
        description: `Welcome ${user.displayName}!`,
      });
    }
  }, [user]);

  return { onSubmit, form, isLoading, isError };
}
