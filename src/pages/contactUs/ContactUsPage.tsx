import { BreadCrumb, ContactForm, ContactSideBar } from "@/components";

export function ContactUsPage() {
  return (
    <section className="min-h-[700px]">
      <div className="container mb-28 mt-14 max-w-container-width">
        <BreadCrumb />
        <div className="grid space-y-10 md:grid-cols-6 md:gap-10">
          <ContactSideBar />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
