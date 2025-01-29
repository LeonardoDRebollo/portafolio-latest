import Button from "./button.component";
import styles from "../page.module.css";
import { Cow, Meteor, Planet, UfoBeam } from "../../../public/svg-logos/svg-icons";

interface welcomeProps {
    onClick: () => void
    onClickContact: () => void
}
export function WelcomeContainer ({onClick, onClickContact}: welcomeProps) {
    return (
        <section className={styles.welcome}>
                      <UfoBeam className={styles.ufo} />
            <Cow className={styles.cow} />
            <Meteor className={styles.meteor} />
          <div className={styles.welcome_title}>

            <div className={styles.welcome_text}>
            <h2>
            BIENVENIDO A MI PAGINA DE PORTAFOLIO, AQUI ENCONTRARAS ALGUNOS DE LOS PROYECTOS QUE HE REALIZADO.
            </h2>
            </div>
           
            <br></br>
            <Planet className={styles.planet} />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5%"}}> 
            <Button type="button" onClick={onClick} label="Ver Proyectos" className={styles.button} />
            <Button type="button" onClick={onClickContact} label="Contactame" className={styles.button} />
            </div>
           
          </div>
          {/* <div className={styles.triangle_shape}>
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
          </div> */}
          {/* <div className={styles.welcome_shape}>
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
          </div>  */}

          
        </section>
    )
}