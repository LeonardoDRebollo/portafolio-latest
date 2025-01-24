import Button from "./button.component";
import styles from "../page.module.css";
import { Cow, Meteor, Planet, UfoBeam } from "../../../public/svg-logos/svg-icons";

interface welcomeProps {
    onClick: () => void
}
export function WelcomeContainer ({onClick}: welcomeProps) {
    return (
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
                d="M985.66,92.83C906.67,72,823.78,
                31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172
                ,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={styles.wave_fill}
              ></path>
            </svg>
          </div>

          <Button type="button" onClick={onClick} className={styles.button} />
        </section>
    )
}