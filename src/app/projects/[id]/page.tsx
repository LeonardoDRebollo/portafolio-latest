"use client";

import {  useRouter } from "next/navigation";
import styles from "../projects.module.css";
import { BlackWave } from "@/app/components/blackwave.component";
import { Star } from "@/app/page";
import { use, useEffect, useState } from "react";
import { createStars } from "@/app/functions/create-stars.function";
import { Astronaut } from "../../../../public/svg-logos/svg-icons";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IconButton } from "@mui/material";
import petmania from "../../../../public/images/Petmania/petmania-1.png";
import Image from "next/image";
import { ProjectDescription } from "@/app/components/project-components/project-description.component";
import { ProjectsInterface } from "../projects-list";

export interface ProjectResponse{
  data:ProjectsInterface
}
export default function ProjectPage({params}: {params:Promise<{ id: string}>}) {
  const router = useRouter();
  const { id } = use(params);
  const [data, setData] = useState<ProjectResponse>();
  const [loading, setLoading] = useState(true);
  
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      createStars(
        300,
        document.documentElement.scrollHeight,
        document.documentElement.scrollWidth
      )
    );
  }, []);

  const getProject = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/projects-api?id=${id}`, {
        method: "GET",
      });
     
      const data = await response.json();
      console.log(data);
      setData(data);
    }catch (error) {
      alert(error);
    }finally {
      setLoading(false);
    }
    
   
  };

  useEffect(() => {
    getProject();
  }, []);


  return (
    <div id="stars" className={styles.main}>
      {stars.map((star, index) => (
        <figure
          key={index}
          className="star"
          style={{
            position: "absolute",
            top: `${star.top}px`,
            left: `${star.left}px`,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
      <div className={styles.container}>
        <section>
          <IconButton>
            <span onClick={() => router.back()} className={styles.backButton}>
              <ArrowBackIosNewRoundedIcon sx={{ color: "black" }} />
              <p className={styles.backButtonText}>Volver</p>
            </span>
          </IconButton>
        </section>
        <section className={styles.project_section}>
          {loading ? <p>Cargando...</p> : 
          data ? 
          (<ProjectDescription id={id} data={data.data} />) : 
          <p>Proyecto no encontrado</p>
          }
          
          <div className={styles.images_project}>
          <Image src={petmania.src} alt="Project Image" height={300} width={300} />;
          </div>
        </section>
        
      </div>
      <Astronaut className={styles.astronaut} />
      <BlackWave />
    </div>
  );
}
