import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import styles from "../page.module.css";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';

const TimeLineItems = [
   {
     icon: <WebRoundedIcon />,
     name: "Mirror Project",
     date: "2024 - Presente",
     description: "Aplicación web para el diseño y gestion de proyectos de bases de datos, integrando un sistema de control de versiones y inteligencia artificial.",
   },
   {
     icon: <WebRoundedIcon />,
     name: "Aluvipac",
     date: "2024 - 2024",
     description: "Pagina web para la empresa Aluvipac ubicada en la ciudad de Cancun.",
   },
   {
     icon: <WebRoundedIcon />,
     name: "HRC-Intern-Management",
     date: "2024 - 2024",
     description: "Plataforma web para la empresa Hard Rock Hotel Cancun, enfocado a la parte del frontend esta plataforma pretende ser una herramienta de gestión de practicantes.",
   },
   {
     icon: <PhoneAndroidRoundedIcon />,
     name: "Banking Movile App",
     date: "2024 - 2024",
     description: "Aplicación de banco movil realizada en Flutter como parte de un proyecto escolar.",
   },
   {
     icon: <WebRoundedIcon />,
     name: "SIPSE TVCUN Management System",
     date: "2023 - 2023",
     description: "Plataforma web para la empresa SIPSE TVCUN, desarrollo fullstack de una api en C#, base de datos mysql y un frontend en React.js, esta plataforma pretende ser una herramienta para la gestion de noticias.",
   },
   {
     icon: <WebRoundedIcon />,
     name: "Plataforma de memorias de la universidad Politecnica de Quintana Roo",
     date: "2023 - 2023",
     description: "Plataforma web para la universidad Politecnica de Quintana Roo, esta plataforma pretende ser una herramienta para la gestion de las memorias de los proximos egresados y la publicacion de ellas.",
   },
   {
     icon: <WebRoundedIcon />,
     name: "MythSchool",
     date: "2022 - 2022",
     description: "Plataforma web para la busqueda de instituciones educativas, desarrollo fullstack MVC en .NET, esta plataforma pretende ser una herramienta para la busqueda de instituciones educativas en el estado de Quintana Roo.",
   },
   {
     icon: <DesktopWindowsRoundedIcon />,
     name: "Radio Difusora",
     date: "2022 - 2022",
     description: "Aplicación windows para la gestion de programas de radio, proyecto escolar en C#.",
   },
   {
     icon: <DesktopWindowsRoundedIcon />,
     name: "Petmania",
     date: "2019 - 2019",
     description: "Aplicación windows para la gestion de mascotas, proyecto escolar en Java.",
   }
]

export default function TimeLine() {
    return (
      <div className={styles.timeline_container}>
   <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {TimeLineItems.map((item, index) => (
        <TimelineItem key={index} >
          <TimelineOppositeContent>
            <p className={styles.timeline_date}>{item.date}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" ><div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{item.icon}</div></TimelineDot>
            {index !== TimeLineItems.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.timeline_content}>
              <section >        
                <h3>{item.name}</h3> 
                <p style={{ maxWidth: "500px", textAlign: "justify" }}>{item.description}</p>
              </section>
              <section>
                <ArrowForwardIosRoundedIcon className={styles.icon}/>
              </section>
             
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
   
      </div>
     
    );
}