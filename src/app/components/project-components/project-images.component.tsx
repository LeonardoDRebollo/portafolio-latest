import { useState } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ProjectModalImages from "./project-modal-images.component";

export interface ProjectImagesProps {
  data: string[];
}

export default function ProjectImages({ data }: ProjectImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [, setImage] = useState("");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const ImageClick = ({ data }: { data: string}) => {
    setOpen(true);
    setImage(data);
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
         <ArrowBackIosNewRoundedIcon/>
        </button>
        <ul className="carousel-slides">
          {data.map((img, index) => (
            <li
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={img} alt={`Slide ${index}`} draggable="false" onClick={() => ImageClick({data: img})} />
            </li>
          ))}
        </ul>
        <button className="carousel-btn next" onClick={nextSlide}>
        <ArrowBackIosNewRoundedIcon sx={{transform: "rotate(180deg)"}}/>
        </button>
      </div>
      <div className="carousel-indicators">
        {data.map((_, index) => (
          <button
            key={index}
            className={`indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <ProjectModalImages imageArray={data} open={open} onClose={() => setOpen(false)}/>
    </div>
  );
}
