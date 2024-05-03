import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  // { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Diana Lux Travel",
  about:
    "Welcome to Diana Lux Travel. Lorem simply text amet cing elit.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+ 30 999 0000",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "dianaluxtravel@company.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "99 road, Thessaloniki, Greece",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    // { id: 2, link: "#", title: "Community Blog" },
    // { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    // { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    // { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
