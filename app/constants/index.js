import {
  FaBirthdayCake,
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export const aboutData = [
  {
    icon: <FaBirthdayCake />,
    label: "Age",
    value: calculateAge("2000-07-08"),
  },
  {
    icon: <FaGraduationCap size={20} />,
    label: "Education",
    value: "Master of Computer Applications",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "8921386007",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "clementsijo@gmail.com",
  },
  {
    icon: <MdLocationOn size={20} />,
    label: "Location",
    value: "Palakkad | Kerala",
  },
];
export const myProjects = [
  {
    id: 1,
    title: "the fashion app",
    texture: "/textures/project/project2.mp4",
    link: "https://the-fashionisto.vercel.app/",
  },
  {
    id: 2,
    title: "the game app",
    texture: "/textures/project/project3.mp4",
    link: "https://xo-games.vercel.app/",
  },
];
