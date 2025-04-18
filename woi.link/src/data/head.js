import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineManageAccounts, MdSpaceDashboard, MdPayment } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineQrcode } from "react-icons/ai";
import { FaStore, FaRegCreditCard } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";

export const menuItems = [
  // { id: 1, name: "Dashboard", path: "/u-d", menuIcon: IoHomeSharp },

  {
    id: 2,
    name: "Profile Settings",
    isDropdown: true,
    menuIcon: MdOutlineManageAccounts,
    links: [
      { name: "Billing & Subscription", path: "/user/link-in-bio", menuIcon: MdPayment },
      { name: "My Orders", path: "/user/my-orders", menuIcon: AiOutlineShoppingCart },
      { name: "Payments & Invoices", path: "/user/payments-invoices", menuIcon: FaRegCreditCard },
      { name: "Settings", path: "/user/payments-invoices", menuIcon: RiSettings3Line  },
      { name: "Billing Details", path: "/user/payments-invoices", menuIcon: MdPayment },

    ],
  },
  {
    id: 3,
    name: "Tools",
    menuIcon: MdSpaceDashboard,
    isDropdown: true,
    links: [
      { name: "Digital Business Card", path: "/user/digital-card", menuIcon: IoHomeSharp },
      { name: "Link in Bio", path: "/user/link-in-bio", menuIcon: MdOutlineManageAccounts },
      { name: "Virtual Store", path: "/user/virtual-store", menuIcon: FaStore },
      { name: "QR Code", path: "/user/qr-code", menuIcon: AiOutlineQrcode },
      { name: "Email Signature", path: "/user/email-signature", menuIcon: MdPayment },
      { name: "Virtual Backgrounds", path: "/user/virtual-backgrounds", menuIcon: MdOutlineManageAccounts },
      { name: "Wallpaper", path: "/user/wallpaper", menuIcon: MdSpaceDashboard },
      { name: "Event Badge", path: "/user/event-badge", menuIcon: IoHomeSharp },
    ],
  },
 

  // {
  //   id: 4,
  //   name: "Profile Settings",
  //   menuIcon: RiSettings3Line,
  //   isDropdown: true,
  //   links: [
  //     { name: "Settings", path: "/user/settings", menuIcon: RiSettings3Line },
  //     { name: "Billing Details", path: "/user/billing-details", menuIcon: MdPayment },
  //   ],
  // },
];
  export const joiningDates = ["Jan 1, 2022", "Dec 31, 2022"];


  
  // -----------------mob----------------
  export const notifications = [
    {
      id: 1,
      name: "David Beckham",
      avatar: "/woilink/react/avatar/business.jpg",
      message: "Last date",
      extra: "12/12/2025 to 29-03-2025",
      statusColor: null,
    },
    {
      id: 2,
      name: "Reyan Philip",
      avatar: "/woilink/react/avatar/music.jpg",
      message: "Woilink gift card",
      extra: "",
      statusColor: null,
    },
    {
      id: 3,
      name: "Riya",
      avatar: "/woilink/react/avatar/7.jpg",
      message: "Successfully login",
      extra: "",
      statusColor: "bg-green-300",
    },
    {
      id: 4,
      name: "Ousmane Dembele",
      avatar: "/woilink/react/avatar/2.jpg",
      message: "Your card will expire today",
      extra: "12/12/2025",
      statusColor: "bg-red-300",
    },
    {
      id: 5,
      name: "C. Philip",
      avatar: "/woilink/react/avatar/13.jpg",
      message: "Hi, C. Philip any Woilink team help?",
      extra: "",
      statusColor: null,
    },
    {
      id: 6,
      name: "Antoine Griezmann",
      avatar: "/woilink/react/avatar/11.jpg",
      message: "Your card will expire today",
      extra: "12/12/2025",
      statusColor: "bg-red-300",
    },
  ];
  