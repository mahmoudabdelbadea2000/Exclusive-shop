import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { GlobalSchema } from "@/validation";
import { toast } from "@/components/ui/use-toast";
import { auth } from "@/firebase";
import {
  GoogleAuthProvider,
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export function SignInHook() {
  const { loginSchema } = GlobalSchema();
  const [userCredentials, setUserCredentials] = useState<null | User>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  type userLoginValues = z.infer<typeof loginSchema>;
  const form = useForm<userLoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: userLoginValues) => {
    const { email, password } = data;
    try {
      setIsLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUserCredentials(user);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast({
          title: "login failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      setIsLoading(true);
      await signInWithPopup(auth, provider);

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast({
          title: "login failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userCredentials) {
      toast({
        title: "login successful",
        description: `Welcome ${userCredentials.providerData[0].displayName}!`,
      });
    }
  }, [userCredentials]);

  return { onSubmit, form, isLoading, error, signInWithGoogle };
}
