"use client";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/_hero.module.scss";
import heroSlides from "../HomePage/data/heroSlides";
export default function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const slides = [
    "/hero/slide1.png",
    "/hero/slide2.png",
    "/hero/slide3.png",
  ];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={`row align-items-center ${isArabic ? "flex-row-reverse" : ""}`}>
          
          {/* النص */}
          <div className="col-lg-6 col-md-12 text-section">
            <h5 className={styles.subtitle}>{t("hero.welcome")}</h5>
            <h1 className={styles.title}>{t("hero.companyName")}</h1>
            <p className={styles.desc}>{t("hero.description1")}</p>
            <p className={styles.desc}>{t("hero.description2")}</p>
            <a href="#about" className={styles.btn}>
              {t("hero.readMore")}
            </a>
          </div>

          <div className="col-lg-6 col-md-12">
            <Swiper
              modules={[Navigation]}
              navigation
              loop
              className={styles.slider}
            >
              {heroSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.imageWrapper}>
                    <img src={slide.img} alt={slide.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
