"use client";

import { useEffect, useState } from "react";
import Button from "./components/button.component";
import styles from "./page.module.css";
import TimeLine from "./components/time-line.component";
import ProfileLine from "./components/profie-line.component";
import { Cow, Meteor, Planet, UfoBeam } from "../../public/svg-logos/svg-icons";

interface Star {
  top: number;
  left: number;
}

export default function Home() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStars = (count: number) => {
      const pageHeight = document.documentElement.scrollHeight;
      const pageWidth = document.documentElement.scrollWidth;
      const generatedStars: Star[] = [];

      for (let i = 0; i < count; i++) {
        generatedStars.push({
          top: Math.random() * pageHeight,
          left: Math.random() * pageWidth,
        });
      }

      setStars(generatedStars);
    };

    createStars(300);
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
        <section className={styles.welcome}>
          <div className={styles.welcome_title}>
            <UfoBeam className={styles.ufo} />
            <Cow className={styles.cow} />
            <Meteor className={styles.meteor} />
            <div style={{ zIndex: "999", position: "relative" }}>
            <h2>
            Bienvenido a mi portafolio, donde podrás encontrar información sobre mí, los proyectos en los que he trabajado, los que estoy desarrollando actualmente y mi formación académica.
            </h2>
            </div>
           
            <br></br>
            <Planet className={styles.planet} />
          </div>
          <div className={styles.triangle_shape}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                className={styles.triangle_fill}
              ></path>
            </svg>
          </div>
          <div className={styles.welcome_shape}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={styles.wave_fill}
              ></path>
            </svg>
          </div>

          <Button type="button" className={styles.button} />
        </section>

        <section className={styles.userprofile}>
          <ProfileLine />
          <TimeLine />
        </section>
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shape_fill}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
