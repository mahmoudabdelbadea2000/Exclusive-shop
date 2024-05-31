import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactSideBar() {
  const { t } = useTranslation("global");
  return (
    <aside className="col-span-2 rounded-sm p-4 shadow-md">
      <div className="space-y-8">
        <div className="mb-4 space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main-color text-white">
              <Phone className="h-5 w-5" />
            </div>
            <h6 className="font-medium">{t("contact.side-bar.call")}</h6>
          </div>
          <p>{t("contact.side-bar.span")}</p>
          <p>{t("contact.side-bar.phone")}</p>
        </div>
        <hr />
        <div className="mb-4 space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main-color text-white">
              <Mail className="h-5 w-5" />
            </div>
            <h6 className="font-medium">{t("contact.side-bar.write")}</h6>
          </div>
          <p>{t("contact.side-bar.span-2")}</p>
          <p>{t("contact.side-bar.email")}</p>
          <p>{t("contact.side-bar.email-2")}</p>
        </div>
      </div>
    </aside>
  );
}
