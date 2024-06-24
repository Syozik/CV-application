export const CVFields = [
  {
    name: "General Information",
    fields: [
      { title: "First Name", type: "text" },
      { title: "Last Name", type: "text" },
      { title: "Phone Number", type: "phone" },
      { title: "Email", type: "email" },
    ],
  },
  {
    section: "Education",
    fields: [
      { title: "School Name", type: "text" },
      { title: "Major", type: "text" },
      { title: "Start date", type: "date" },
      { title: "End date", type: "date" },
    ],
  },
  {
    section: "Experience",
    fields: [
      { title: "Company Name", type: "text" },
      { title: "Position", type: "text" },
      { title: "Short description / main responsibilities", type: "textarea" },
      { title: "Start date", type: "date" },
      { title: "End date", type: "date" },
    ],
  },
];
