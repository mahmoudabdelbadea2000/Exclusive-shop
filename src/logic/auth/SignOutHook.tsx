import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export function SignOutHook() {
  const logOut = async () => {
    await signOut(auth);
    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  };

  return { logOut };
}
