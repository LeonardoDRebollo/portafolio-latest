
import { NextIcon } from "../../../public/svg-logos/svg-icons";
import styles from "../page.module.css";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div 
            style={{ display: "flex", justifyContent: "center", 
            alignItems: "center", gap: "10px", backgroundColor: "black", position: "relative", zIndex: "1" }}>
            <p>Powered by</p>
            <NextIcon className={styles.svgIcon} />
            </div>
        </footer>
    );
}

export default Footer
