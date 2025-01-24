"use client";

import {  useRouter } from "next/navigation";
import styles from "../projects.module.css";
import { BlackWave } from "@/app/components/blackwave.component";
import { Star } from "@/app/page";
import { useEffect, useState } from "react";
import { createStars } from "@/app/functions/create-stars.function";
import { Astronaut } from "../../../../public/svg-logos/svg-icons";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IconButton } from "@mui/material";
import petmania from "../../../../public/images/Petmania/petmania-1.png";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = params;
  
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
          <div className={styles.description_project}>
            <h2>Proyecto {id}</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
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
