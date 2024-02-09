import { IoLocation } from "react-icons/io5";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";



export const NavbarItems = [
  {
    name: "Find Butik",
    path: "/find-butik",
    icon: <IoLocation size={20}  className="icon" />,
  },
  {
    name: "Login",
    path: "/login",
    icon: <FaUserCircle size={20} className="icon" />,
  },
  {
    name: "Indkøbskurv",
    path: "/kurv",
    icon: <FaShoppingCart size={20} className="icon" />,
  }
];


export const LogoLetters = [
    {
      letter: "B",
      color: "#31303a",
    },
    {
      letter: "a",
      color: "#62c394",
    },
    {
      letter: "l",
      color: "#4f55bc",
    },
    {
      letter: "I",
      color: "#b440c8",
    },
    {
      letter: "A",
      color: "#898888",
    },
    {
      letter: "b",
      color: "#bdc48d",
    },
    {
      letter: "b",
      color: "#c16937",
    },
    {
      letter: "a",
      color: "#3ec7ad",
    },
  ];