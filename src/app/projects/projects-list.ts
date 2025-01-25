import { TecnologiesInterface } from "./tecnologies-list";

export interface ProjectsInterface {
    id: number;
    name: string;
    description: string;
    imagesSrc: string;
    technologies: number[];
    projectTecnologies?: TecnologiesInterface[]
}


export const Projects : ProjectsInterface[] = [
    {
        id: 1,
        name: "Mirror Project",
        description:
            "Aplicación web para el diseño y gestion de proyectos de bases de datos, integrando un sistema de control de versiones y inteligencia artificial.",
        imagesSrc: "images/petmania",
        technologies: [1, 2, 3]
    },
    {
        id: 2,
        name: "Aluvipac",
        description:
            "Pagina web para la empresa Aluvipac ubicada en la ciudad de Cancun.",
        imagesSrc: "images/RadioXmal",
        technologies: [4, 5, 6]
    },
    {
        id: 3,
        name: "HRC Intern Management",
        description:
            "Plataforma web para la empresa Hard Rock Hotel Cancun, enfocado a la parte del frontend esta plataforma pretende ser una herramienta de gestión de practicantes.",
        imagesSrc: "images/petmania",
        technologies: [1, 2, 3]
    }   
]