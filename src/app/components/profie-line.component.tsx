import profilePicture from "../../../public/images/profile/Foto.jpg";
import styles from "../page.module.css";
export default function ProfileLine() {
    return (
        <div className={styles.profile_section}>
            <div className={styles.profile}>

            <img src={profilePicture.src} alt="Foto de perfil"/>
            <h1>Perfil</h1>
            <p>Estudiante de la carrera de Ingenieria en Sistemas</p>
            </div>
        </div>    
    );
}