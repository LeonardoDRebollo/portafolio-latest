'use client';

import { notFound, useRouter } from "next/navigation";
import styles from "../projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Image from "next/image"; // Usar Image de Next.js para optimización

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { id } = params;
  const router = useRouter(); // Usar useRouter en lugar de history

  if (!id) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1>Detalles del Proyecto</h1>
      <p>ID del Proyecto: {id}</p>
      <button onClick={() => router.back()}>Volver</button>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <Image
            src="/images/Petmania/petmania-1.png"
            alt="Slide 1"
            width={600} // Define un tamaño
            height={400} // Define un tamaño
            className="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/Petmania/petmania-2.png"
            alt="Slide 2"
            width={600}
            height={400}
            className="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/Petmania/petmania-3.png"
            alt="Slide 3"
            width={600}
            height={400}
            className="carousel-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
