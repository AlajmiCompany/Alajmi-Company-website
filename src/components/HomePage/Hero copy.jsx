"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/_hero.module.scss";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const slides = [
    {
      img: "/logo.png",
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle"),
      desc: t("hero.slide1.desc"),
      link: "#",
    },
    {
      img: "/logo.png",
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle"),
      desc: t("hero.slide2.desc"),
      link: "#",
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slide}>
              <div className={styles.image}>
                <img src={s.img} alt={s.title} />
              </div>
              <div className={styles.content}>
                <h3>{s.subtitle}</h3>
                <h1>{s.title}</h1>
                <p>{s.desc}</p>
                <a href={s.link} className={styles.btn}>
                  {t("hero.readMore")}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
