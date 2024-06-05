import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { GlobalSchema } from "@/validation";
import { toast } from "@/components/ui/use-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";

export function SignUpHook() {
  const { signInSchema } = GlobalSchema();
  const navigate = useNavigate();

  type userRegisterValues = z.infer<typeof signInSchema>;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<userRegisterValues>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: userRegisterValues) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast({
        title: "Sign Up successful",
        description: `Welcome ${data.username}!`,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Sign Up failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign Up failed",
          description: "An unknown error occurred",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    form,
    isLoading,
  };
}
