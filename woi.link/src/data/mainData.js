import { AiOutlineProject } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { GiMusicalNotes, GiWavyChains } from "react-icons/gi";
import { IoCallOutline, IoFastFoodOutline } from "react-icons/io5";
import {
  MdContentPaste,
  MdLocalGroceryStore,
  MdOutlineShoppingCart,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { RxCardStackPlus } from "react-icons/rx";
import { SlSocialYoutube } from "react-icons/sl";

export const dashboardData = [
  {
    id: 1,
    title: "Total Users",
    value: 1200,
    description: "Number of active users on the platform.",
  },
  {
    id: 2,
    title: "Bookings",
    value: 350,
    description: "Total bookings made this month.",
  },
  {
    id: 3,
    title: "Revenue",
    value: "$25,000",
    description: "Total revenue generated from bookings.",
  },
];

export const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 25,
  country: "USA",
};

export const notifications = [
  {
    id: 1,
    message: "Your booking #1234 has been confirmed.",
    type: "success",
  },
  {
    id: 2,
    message: "New user registered: Jane Doe",
    type: "info",
  },
  {
    id: 3,
    message: "Your profile information was updated.",
    type: "warning",
  },
];

// src/data.js
export const users = [
  { name: "Yagnik Solanki", customerId: "02352", lastActive: "16-03-2025" },
];

export const cardsDetails = [
  {
    id: 1,
    title: "Digital Cards",
    plan: "PRO/Monthly",
    discount: "10%",
    planStatus: "expiry",
    totalCredit: 12,
    expiryDate: "12/01/2025",
    icon: RxCardStackPlus,
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    title: "Link in bio",
    plan: "PRO/Monthly",
    discount: "20%",
    planStatus: "expiry ",
    totalCredit: 15,
    expiryDate: "12/01/2025",
    icon: FaLink,
    bgColor: "bg-black",
  },
  {
    id: 3,
    title: "Virtual Store",
    plan: "PRO/Monthly",
    discount: "15%",
    planStatus: "expiry ",
    totalCredit: 50,
    expiryDate: "12/01/2025",
    icon: MdLocalGroceryStore,
    bgColor: "bg-green-800",
  },
  // {
  //   id: 4,
  //   title: "Digital sdfsfsf",
  //   plan: "PRO/Monthly",
  //   discount: "10%",
  //   planStatus: "expiry soon",
  //   totalCredit: 12,
  //   expiryDate: "12/01/2025",
  //   icon: RxCardStackPlus,
  //   bgColor: "bg-blue-600"
  // },
];

export const profiles = [
  {
    id: 1,
    name: "Liceria Band",
    role: "MD",
    image: "/woilink/react/avatar/11.jpg",
    viewLink: "/profile/liceria-band",
    editLink: "/edit/liceria-band",
  },
  {
    id: 2,
    name: "Yael Amari",
    role: "Executive",
    image: "/woilink/react/avatar/2.jpg",
    viewLink: "/profile/yael-amari",
    editLink: "/edit/yael-amari",
  },
  {
    id: 3,
    name: "Olivia Wilson",
    role: "Director",
    image: "/woilink/react/avatar/7.jpg",
    viewLink: "/profile/olivia-wilson",
    editLink: "/edit/olivia-wilson",
  },
  {
    id: 4,
    name: "YIP",
    role: "Director",
    image: "/woilink/react/avatar/business.jpg",
    viewLink: "/profile/yip",
    editLink: "/edit/yip",
  },
  {
    id: 5,
    name: "Larana Group",
    role: "Manager",
    image: "/woilink/react/avatar/music.jpg",
    viewLink: "/profile/larana-group",
    editLink: "/edit/larana-group",
  },
  {
    id: 6,
    name: "John - WEM",
    role: "Developer",
    image: "/woilink/react/avatar/23.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 7,
    name: "Alice Smith",
    role: "Marketing Manager",
    image: "/woilink/react/avatar/14.jpg",
    viewLink: "/profile/liceria-band",
    editLink: "/edit/liceria-band",
  },
  {
    id: 8,
    name: "Michael Johnson",
    role: "Operations Director",
    image: "/woilink/react/avatar/15.jpg",
    viewLink: "/profile/yael-amari",
    editLink: "/edit/yael-amari",
  },
  {
    id: 9,
    name: "Sarah Williams",
    role: "Sales Executive",
    image: "/woilink/react/avatar/16.jpg",
    viewLink: "/profile/olivia-wilson",
    editLink: "/edit/olivia-wilson",
  },
  {
    id: 10,
    name: "David Brown",
    role: "Tour Coordinator",
    image: "/woilink/react/avatar/17.jpg",
    viewLink: "/profile/yip",
    editLink: "/edit/yip",
  },
  {
    id: 11,
    name: "Emma Wilson",
    role: "Customer Relations Manager",
    image: "/woilink/react/avatar/18.jpg",
    viewLink: "/profile/larana-group",
    editLink: "/edit/larana-group",
  },
  {
    id: 12,
    name: "Robert Miller",
    role: "Finance Head",
    image: "/woilink/react/avatar/19.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 13,
    name: "Sophia Davis",
    role: "Product Manager",
    image: "/woilink/react/avatar/20.jpg",
    viewLink: "/profile/liceria-band",
    editLink: "/edit/liceria-band",
  },
  {
    id: 14,
    name: "James Anderson",
    role: "IT Manager",
    image: "/woilink/react/avatar/21.jpg",
    viewLink: "/profile/yael-amari",
    editLink: "/edit/yael-amari",
  },
  {
    id: 15,
    name: "Olivia Martinez ",
    role: "HR Director",
    image: "/woilink/react/avatar/22.jpg",
    viewLink: "/profile/olivia-wilson",
    editLink: "/edit/olivia-wilson",
  },
  {
    id: 16,
    name: "Liam Thompson",
    role: "CTO",
    image: "/woilink/react/avatar/24.jpg",
    viewLink: "/profile/yip",
    editLink: "/edit/yip",
  },
  {
    id: 17,
    name: "Charlotte White",
    role: "UX Designer",
    image: "/woilink/react/avatar/6.jpg",
    viewLink: "/profile/larana-group",
    editLink: "/edit/larana-group",
  },
  {
    id: 18,
    name: "Benjamin Harris",
    role: "Travel Consultant",
    image: "/woilink/react/avatar/7.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 19,
    name: "Mia Robinson",
    role: "Content Strategist",
    image: "/woilink/react/avatar/25.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 20,
    name: "Emma Carter",
    role: "Software Engineer",
    image: "/woilink/react/avatar/26.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 21,
    name: "Olivia Reed ",
    role: "Cloud Architect",
    image: "/woilink/react/avatar/27.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 22,
    name: "Jacob Foster ",
    role: "Cybersecurity Analyst",
    image: "/woilink/react/avatar/28.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 23,
    name: "Lily Dawson",
    role: " Data Scientist",
    image: "/woilink/react/avatar/29.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
  {
    id: 24,
    name: "Ryan Mitchell ",
    role: " DevOps Engineer",
    image: "/woilink/react/avatar/30.jpg",
    viewLink: "/profile/john-wem",
    editLink: "/edit/john-wem",
  },
];

export const userTypes = [
  {
    id: "creators",
    title: "Creators",
    description: "Build my following and explore ways to monetize my audience.",
    image: "/woilink/react/logins/creators.jpg",
    links: ["/monetization"],
  },
  {
    id: "business",
    title: "Business",
    description: "Grow my business and reach more customers.",
    image: "/woilink/react/logins/business.jpg",
    links: ["business"],
  },
  {
    id: "personal",
    title: "Personal",
    description: "Share links with my friends and acquaintances.",
    image: "/woilink/react/logins/personal.jpg",
    links: ["/monetization"],
  },
];

export const monetisationCategories = [
  {
    id: 1,
    icon: IoCallOutline,
    title: "Services",
    description: "Providing 1-1 client services",
  },
  {
    id: 2,
    icon: AiOutlineProject,
    title: "Experiences",
    description: "Selling access to in-person experiences",
  },
  {
    id: 3,
    icon: IoFastFoodOutline,
    title: "Food & Beverage",
    description: "Selling food and/or drinks in person",
  },
  {
    id: 4,
    icon: BsShop,
    title: "Retail",
    description: "Selling physical products in store",
  },
  {
    id: 5,
    icon: MdOutlineShoppingCart,
    title: "E-commerce",
    description: "Selling physical products online",
  },
  {
    id: 6,
    icon: GiMusicalNotes,
    title: "Streams",
    description: "Royalties from music streaming platforms",
  },
  {
    id: 7,
    icon: SlSocialYoutube,
    title: "Youtube",
    description: "Earning a share of platform ad revenue",
  },
  {
    id: 8,
    icon: MdOutlineTipsAndUpdates,
    title: "Tips",
    description: "Tips from live streaming",
  },
  {
    id: 9,
    icon: GiWavyChains,
    title: "Affiliate",
    description: "Promoting products and services from other brands",
  },
  {
    id: 10,
    icon: MdContentPaste,
    title: "Content",
    description: "Selling access to premium digital content",
  },
];

export const BusinessmonetisationCategories = [
  {
    id: 1,
    title: "Capture leads at conferences and events",
  },
  {
    id: 2,
    title: "Sync leads to our CRm",
  },
  {
    id: 3,
    title: "Capture leads outside of events",
  },
  {
    id: 4,
    title: "Book demos and meetings",
  },
  {
    id: 5,
    title: "Ceate Digital Business Cards",
  },
  {
    id: 6,
    title: "Create Virtual Backgrounds",
  },
  {
    id: 7,
    title: "Create Email Signatures",
  },
];

export const BusinessmonetisationLeads = [
  {
    id: 1,
    title: "Scanning Conference Badges",
  },
  {
    id: 2,
    title: "Scanning Paper Cards",
  },
  {
    id: 3,
    title: "Filling our forms",
  },
  {
    id: 4,
    title: "Other",
  },
];
export const BusinessmonetisationLeadsCapture = [
  {
    id: 1,
    title: "Scanning Conference Badges",
  },
  {
    id: 2,
    title: "Scanning Paper Cards",
  },
  {
    id: 3,
    title: "Filling our forms",
  },
  {
    id: 4,
    title: "Other",
  },
];
export const businessCategories = [
  { id: 1, title: "Beauty" },
  { id: 2, title: "Retail & ecommerce" },
  { id: 3, title: "Restaurants & cafes" },
  { id: 4, title: "Real estate" },
  { id: 5, title: "Personal trainer" },
  { id: 6, title: "Other" },
];

// export const businessCategories = [
//   "Beauty",
//   "Retail & ecommerce",
//   "Restaurants & cafes",
//   "Real estate",
//   "Personal trainer",
//   "Other",
// ];

// data.js
export const proFeaturesData = {
  title: `businesses\ndo more\nwith`,
  highlight: "Pro",
  emoji: "🚀",
  heading:
    "Upgrade to Pro. Make your link in bio work harder for your business.",
  subheading:
    "Rs.300/month annually or Rs.450 monthly after trial ends. Cancel any time.",
  features: [
    {
      icon: "🚄",
      title: "Generate leads, at speed",
      description: "Download the contact list to use anywhere",
    },
    {
      icon: "🎉",
      title: "Brand your Woilink, your way",
      description: "Even get a QR code with your logo on it",
    },
    {
      icon: "📅",
      title: "Get booked and busy with Calendly",
      description: "Animate your appointments for 3x clicks",
    },
  ],
  cta: "Continue with 7 day free trial",
  imageUrl:
    "https://mfe-onboarding.production.linktr.ee/images/business.5e049e76.webp",
};

// data.js
export const urTemplates = [
  {
    id: 1,
    name: "Template Emmy",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-emmy.8ecf7511.webp",
    link: "/u-r/create/select-platforms",
  },
  {
    id: 2,
    name: "Template Rose",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-lexie-classic.cd786845.webp",
    link: "/template/rose",
  },
  {
    id: 3,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-holly.3168aca8.webp",
    link: "/template/nova",
  },
  {
    id: 4,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-newlovestore.27595ccf.webp",
    link: "/template/nova",
  },
  {
    id: 5,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-tranquil-classic.44bd4d2b.webp",
    link: "/template/nova",
  },
  {
    id: 6,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-teaitup-classic.202802c2.webp",
    link: "/template/nova",
  },
  {
    id: 7,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-tatiana.d6d7e59a.webp",
    link: "/template/nova",
  },
  {
    id: 8,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-jacque.d3fcad77.webp",
    link: "/template/nova",
  },
  {
    id: 9,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-indi-classic.4ae9198a.webp",
    link: "/template/nova",
  },
  {
    id: 10,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-sergey.e9da7e84.webp",
    link: "/template/nova",
  },
  {
    id: 11,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-kevin.69912f0f.webp",
    link: "/template/nova",
  },
  {
    id: 12,
    name: "Template Nova",
    image:
      "https://mfe-onboarding.production.linktr.ee/images/template-natazia.1bd605ee.webp",
    link: "/template/nova",
  },
];

// data.js
export const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "/woilink/react/icons/signup/instagram.svg",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "/woilink/react/icons/signup/youtube.svg",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "/woilink/react/icons/signup/tiktok.svg",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "/woilink/react/icons/signup/whatsapp.svg",
  },
  {
    id: "website",
    name: "Website",
    icon: "/woilink/react/icons/signup/website.svg",
  },
  {
    id: "amazon",
    name: "Amazon",
    icon: "/woilink/react/icons/signup/amazon.svg",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: "/woilink/react/icons/signup/spotify.svg",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "/woilink/react/icons/signup/facebook.svg",
  },
  { id: "x", name: "X", icon: "/woilink/react/icons/signup/x.svg" },
  {
    id: "soundcloud",
    name: "SoundCloud",
    icon: "/woilink/react/icons/signup/soundcloud.svg",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: "/woilink/react/icons/signup/snapchat.svg",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    icon: "/woilink/react/icons/signup/pinterest.svg",
  },
  {
    id: "threads",
    name: "Threads",
    icon: "/woilink/react/icons/signup/threads.svg",
  },
];

// datsa.js
export const suggested_links = [
  {
    id: 1,
    title: "Github",
    url: "https://github.com/sdsfsdf",
    favicon: "/woilink/react/icons/signup/github.svg",
  },
  {
    id: 2,
    title: "twitter x",
    url: "https://snapchat.com/niyas",
    thumbnail: "/woilink/react/avatar/2.jpg",
    favicon: "/woilink/react/icons/signup/x.svg",
  },
  {
    id: 3,
    title: "Snapchat",
    url: "https://snapchat.com/niyas",
    thumbnail: "",
    favicon: "/woilink/react/icons/signup/snapchat.svg",
  },
  {
    id: 4,
    title: "john_pinterest",
    url: "https://snapchat.com/john",
    thumbnail: "/woilink/react/avatar/6.jpg",
    favicon: "/woilink/react/icons/signup/pinterest.svg",
  },
  {
    id: 5,
    title: "cloud",
    url: "https://snapchat.com/cloud_reyan",
    thumbnail: "",
    favicon: "/woilink/react/icons/signup/soundcloud.svg",
  },
  {
    id: 6,
    title: "cloud",
    url: "https://snapchat.com/cloud_reyan",
    thumbnail: "",
    favicon: "/woilink/react/icons/signup/soundcloud.svg",
  },
];

export const businessUseTypes = [
  {
    id: 1,
    title: "My Team",
    description:
      "Set up your team on Woilink and start capturing more leads than ever before",
    image: "/woilink/react/icons/signup/team.svg",
    links: ["/d-monetization"],
  },
  {
    id: 2,
    title: "Myself",
    description:
      "Create a free digital business card for yourself and start sharing immediately",
    image: "/woilink/react/icons/signup/myself.svg",
    links: ["/monetization"],
  },
];

// src/data/storeData.js

export const shopImages = [
  { src: "/woilink/react/logo/shoe_one.png", price: "$75" },
  { src: "/woilink/react/logo/shoe_2.png", price: "$80" },
  { src: "/woilink/react/logo/shoe_3.png", price: "$60" },
  { src: "/woilink/react/logo/shoe_4.png", price: "$120" },
];

export const products = [
  { label: "Lotions", img: "lotions.jpg" },
  { label: "Watches", img: "watches.jpg" },
  { label: "Dress", img: "dress.jpg" },
  { label: "Vegitables", img: "veg.jpg" },
  { label: "Stationery", img: "stationery.jpg" },
  { label: "Computers", img: "computer.jpg" },
];

export const storeLinks = [
  "http://localhost:5000/woilink-frontend/u-r/store",
  "https://www.svgrepo.com/svg/332205/amazon-square",
  "https://chatgpt.com/c/67f8ffb0-456c-800a-bc9e-8865e40bea4a",
];

export const socialIcons = [
  "snapchat.svg",
  "facebook.svg",
  "x.svg",
  "instagram.svg",
  "threads.svg",
];
