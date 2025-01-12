import React from "react";
import ContactItem from "./ContactItem/ContactItem";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

const Contact = () => {
  // Centralized contact data for scalability and readability
  const contactItems = [
    {
      Icon: MapOutlinedIcon,
      title: "Location",
      details: ["Top Chef, Raya", "Lattakia, Syria"],
    },
    {
      Icon: PhoneOutlinedIcon,
      title: "Phone Numbers",
      details: ["(+963) 987 654", "(+963) 654 321"],
    },
    {
      Icon: MailOutlinedIcon,
      title: "Emails",
      details: ["support@example.com", "book@example.com"],
    },
    {
      Icon: QueryBuilderOutlinedIcon,
      title: "Business Hours",
      details: ["Open 04:00 PM", "Closed 01:00 AM"],
    },
  ];

  return (
    <section className="relative w-full py-36 bg-gray-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/50 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 bg-ContactBG_768 md:bg-ContactBG_1024 lg:bg-ContactBG bg-cover bg-center bg-fixed z-0"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {contactItems.map(({ Icon, title, details }, index) => (
            <ContactItem key={index} Icon={Icon} title={title} details={details} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
