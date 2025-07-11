import type { FC } from "react";
import ContactForm from "../components/contact-page/ContactForm";
import { contactData } from "../fake-data/contact-data/ContactData";
import { recipeCardGlobalData } from "../fake-data/layout-data/LayoutData";

const ContactPage: FC = () => {
  return (
    <ContactForm
      data={contactData}
      sideInfo={recipeCardGlobalData}
    />
  );
};

export default ContactPage;
