import { TecnologiesInterface } from "./tecnologies-list";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import { JSX } from "react";
export interface ProjectsInterface {
  id: number;
  icon: JSX.Element;
  name: string;
  date: string;
  repository: string;
  description: string;
  imagesSrc: string;
  technologies: number[];
  projectTecnologies?: TecnologiesInterface[];
  images?: string[];
}

export const Projects: ProjectsInterface[] = [
  {
    id: 1,
    icon: <WebRoundedIcon />,
    name: "Mirror Project",
    date: "2024 - Presente",
    repository: "Privado",
    description:
      "Aplicación web para el diseño y gestion de proyectos de bases de datos, integrando un sistema de control de versiones y inteligencia artificial.",
    imagesSrc: "images/MirrorProject",
    technologies: [9,10,11,1, 2, 14],
  },
  {
    id: 2,
    icon: <WebRoundedIcon />,
    name: "Aluvipac",
    date: "2024 - 2024",
    repository: "https://github.com/LeonardoDRebollo/ALUVIPAC",
    description:
      "Pagina web para la empresa Aluvipac ubicada en la ciudad de Cancun.",
    imagesSrc: "images/Aluvipac",
    technologies: [9,10,11,1, 2, 15 ],
  },
  {
    id: 3,
    icon: <WebRoundedIcon />,
     name: "HRC Intern Management",
     date: "2024 - 2024",
     repository: "Privado",
     description: "Plataforma web para la empresa Hard Rock Hotel Cancun, enfocado a la parte del frontend esta plataforma pretende ser una herramienta de gestión de practicantes.",
    imagesSrc: "images/HardRock",
    technologies: [9,10,11,1, 2, 14],
  },
  {
    id: 4,
    icon: <PhoneAndroidRoundedIcon />,
     name: "Banking Movile App",
     date: "2024 - 2024",
     repository: "https://github.com/LeonardoDRebollo/BanKingApp",
     description: "Aplicación de banco movil realizada en Flutter como parte de un proyecto escolar.",
    imagesSrc: "images/Banking",
    technologies: [13],
  },
  {
    id: 5,
    icon: <WebRoundedIcon />,
    name: "SIPSE TVCUN Management System",
    date: "2023 - 2023",
    repository: "https://github.com/Albertofuentes00/Newsnet-sipsetv",
    description: "Plataforma web para la empresa SIPSE TVCUN, desarrollo fullstack de una api en C#, base de datos mysql y un frontend en React.js, esta plataforma pretende ser una herramienta para la gestion de noticias.",
    imagesSrc: "images/SIPSE",	
    technologies: [1, 2, 4, 5, 7, 9 ],
  },
  {
    id: 6,
    icon: <WebRoundedIcon />,
    name: "Plataforma de memorias de la universidad Politecnica de Quintana Roo",
    date: "2023 - 2023",
    repository: "Privado",
    description: "Plataforma web para la universidad Politecnica de Quintana Roo, esta plataforma pretende ser una herramienta para la gestion de las memorias de los proximos egresados y la publicacion de ellas.",
    imagesSrc: "images/Acervo",
    technologies: [12],
  },
  {
    id: 7,
    icon: <WebRoundedIcon />,
    name: "MythSchool",
    date: "2022 - 2022",
    repository: "https://github.com/LeonardoDRebollo/PFmyschool",
    description: "Plataforma web para la busqueda de instituciones educativas, desarrollo fullstack MVC en .NET, esta plataforma pretende ser una herramienta para la busqueda de instituciones educativas en el estado de Quintana Roo.",
    imagesSrc: "images/MythSchool",
    technologies: [1, 2, 4, 7],
  },
  {
    id: 8,
    icon: <DesktopWindowsRoundedIcon />,
     name: "Radio Difusora",
     date: "2022 - 2022",
     repository: "Privado",
     description: "Aplicación windows para la gestion de programas de radio, proyecto escolar en C#.",
    imagesSrc: "images/RadioXmal",
    technologies: [4,7],
  },
  {
    id: 9,
    icon: <DesktopWindowsRoundedIcon />,
     name: "Petmania",
     date: "2019 - 2019",
     repository: "Privado",
     description: "Aplicación windows para la gestion de mascotas, proyecto escolar en Java.",
    imagesSrc: "images/Petmania",
    technologies: [3,6],
  }

];
