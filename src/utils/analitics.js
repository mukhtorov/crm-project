import talabalarIcon from "../assets/icons/group.svg?react";
import filialIcon from "../assets/icons/hr.svg?react";
import talabalarImg from "../assets/icons/filialImg.svg?react";
import mentorImg from "../assets/icons/mentorImg.svg?react";

import inIcon from "../assets/icons/instagramIcon.svg?react";
import lnIcon from "../assets/icons/linkedinIcon.svg?react";
import tgIcon from "../assets/icons/telegramIcon.svg?react";
import ytIcon from "../assets/icons/youtubeIcon.svg?react";

export const privateData = [
  {
    id: "students",
    title: "Talabalar",
    icon: talabalarIcon,
    img: talabalarImg,
    count: "students",
  },
  {
    id: "mentors",
    title: "Mentorlar",
    icon: talabalarIcon,
    img: mentorImg,
    percentage: "",
    count: "mentors",
  },
  {
    id: "filials",
    title: "Filiallar",
    icon: filialIcon,
    img: talabalarImg,
    percentage: "",
    count: "filials",
  },
];
export const mediaIcon = {
  1: inIcon,
  2: tgIcon,
  3: ytIcon,
  4: lnIcon,
  5: lnIcon,
};
