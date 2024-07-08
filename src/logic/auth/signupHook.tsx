import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GlobalSchema } from "@/validation";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";

export function SignUpHook() {
  const { signInSchema } = GlobalSchema();
  const [userCredentials, setUserCredentials] = useState<null | User>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  type userLoginValues = z.infer<typeof signInSchema>;
  const form = useForm<userLoginValues>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: userLoginValues) => {
    const { email, password, username } = data;
    try {
      setIsLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(user, {
        displayName: username,
      });
      setUserCredentials(user);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast({
          title: "sign up failed",
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
        title: "sign up successful",
        description: `Welcome ${userCredentials.providerData[0].displayName}!`,
      });
    }
  }, [userCredentials]);

  return { onSubmit, form, isLoading, error };
}
