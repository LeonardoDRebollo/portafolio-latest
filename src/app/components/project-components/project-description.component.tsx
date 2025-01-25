"use client";

import { ProjectsInterface } from "@/app/projects/projects-list";
import styles from "../../projects/projects.module.css";
import { TecnologiesList } from "@/app/projects/tecnologies-list";
import { Tooltip } from "@mui/material";

interface ProjectDescriptionProps {
  data: ProjectsInterface;
}
export function ProjectDescription({ data }: ProjectDescriptionProps) {
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
        <h2>{data.name}</h2>
        <p>{data && data.description}</p>
      </section>
      <section >
        <h3>Fechas de desarrollo</h3>
        <p>{data.date}</p>

      </section>
      <section>
        <h3>Repositorio</h3>
        {data.repository === "Privado" ? (<a>Privado</a>) : 
        <p>
          <a href={data.repository} target="_blank">{data.repository}</a>
        </p>}
        
      </section>

      <section>
        <h3>Tecnologías usadas</h3>
        

       
        <div className={styles.tecnologies}>
        {data.projectTecnologies && mappedTechnologies && mappedTechnologies.map((tech) => (
          <Tooltip title={tech.name} key={tech.id}>
          <div key={tech.id} >
            {tech.icon}
           
          </div>
          </Tooltip>
        )) || <p>No hay tecnologías</p>}
        </div> 
        
      </section>
    </div>
  );
}
