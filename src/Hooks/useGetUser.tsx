import { auth } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

type CustomUser = User & { accessToken?: string };

export function useGetUser() {
  const [user, setUser] = useState<CustomUser | null>(null);
  const [showUser, setShowUser] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData);
        setShowUser(true);
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("accessToken", JSON.stringify(user?.accessToken));
  }, [user]);

  return {
    user,
    showUser,
  };
}
