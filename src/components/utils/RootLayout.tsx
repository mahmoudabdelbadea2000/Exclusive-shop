import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import i18n from "@/locales/i18n";
import { UserCredentials } from "@/logic/auth/userCredentials";

export function RootLayout() {
  const [currentLang, setCurrentLang] = useState<string>("");
  const user = UserCredentials();

  const handleChangeLanguage = (e: string) => {
    setCurrentLang(e);
  };

  useEffect(() => {
    window.document.dir = i18n.dir();
    window.document.documentElement.lang = i18n.language;
  }, [currentLang]);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <main>
      <Header handleChangeLanguage={handleChangeLanguage} />
      <Outlet />
      <Footer />
    </main>
  );
}
