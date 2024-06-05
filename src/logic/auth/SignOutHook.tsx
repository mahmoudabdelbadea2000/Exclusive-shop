import { toast } from "@/components/ui/use-toast";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export function SignOutHook() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const logOut = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      await signOut(auth);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "log Uot failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "log out failed",
          description: "An unknown error occurred",
          variant: "destructive",
        });
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading && !isError) {
      window.location.reload();
    }
  }, [isError, isLoading]);

  return { logOut };
}
