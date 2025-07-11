import type { ContactBase, ContactWithInput } from "./ContactType";

export const contactData: (ContactBase & ContactWithInput)[] = [
  {
    title: "Name",
    status: false,
    type: "text",
    placeholder: "Enter your name...",
    id: 1,
  },
  {
    title: "Email Address",
    status: false,
    type: "email",
    placeholder: "Your email address...",
    id: 2,
  },
  {
    title: "Subject",
    status: false,
    type: "text",
    placeholder: "Enter subject...",
    id: 3,
  },
  {
    title: "Enquiry type",
    status: true,
    type: "text",
    placeholder: "Advertising",
    description: ['I didn"t think about what i can write here'],
    id: 4,
  },
];
