"use client";

import { ProjectsInterface } from "@/app/projects/projects-list";
import styles from "../../projects/projects.module.css";
import { TecnologiesList } from "@/app/projects/tecnologies-list";

interface ProjectDescriptionProps {
  id: string;
  data: ProjectsInterface;
}
export function ProjectDescription({ id, data }: ProjectDescriptionProps) {
    const mappedTechnologies = data.projectTecnologies?.map((tech) => {
        const matchedTech = TecnologiesList.find((t) => t.id === tech.id);
        return {
          ...tech,
          icon: matchedTech?.icon || null,
        };
      });
  return (
    <div className={styles.description_project}>
      <section>
        <h2>Proyecto {id}</h2>
        <p>{data && data.description}</p>
      </section>

      <section>
        <h2>Tecnologías</h2>
        <div className={styles.tecnologies}>
        {data.projectTecnologies && mappedTechnologies && mappedTechnologies.map((tech) => (
          <div key={tech.id} >
            {tech.icon}
           
          </div>
        )) || <p>No hay tecnologías</p>}
        </div> 
      </section>
    </div>
  );
}
