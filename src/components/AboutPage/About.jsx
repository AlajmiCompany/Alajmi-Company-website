"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_about.module.scss";
import aboutData from "./aboutData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import aboutSlides from "./aboutSlides";

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  return (
    <section className={`${styles.about} container`}>
      {/* Hero Section with Slider */}
        <div className={`row align-items-center space-between ${isArabic ? "flex-row-reverse" : ""}`}>
          <div className="col-lg-6 col-md-12">
            <div className={styles.text}>
              <h1>{aboutData.hero.title[lang]}</h1>
              <p>{aboutData.hero.subtitle[lang]}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop
              autoplay={{ delay: 3000 }}
              className={styles.slider}
            >
              {aboutSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.imageWrapper}>
                    <img src={slide.img} alt={slide.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

      </div>

      {/* History */}
      <div className={styles.section}>
        <h2>{t("aboutus.history")}</h2>
        <p>{aboutData.history[lang]}</p>
      </div>

{/* Memberships */}
<div className={styles.section}>
  <h2>{t("aboutus.memberships")}</h2>
  <div className={styles.grid}>
    {aboutData.memberships[lang].map((item, i) => (
      <div key={i} className={styles.card}>
        <img src={item.img} alt={item.name} className={styles.logo} />
        <p>{item.name}</p>
      </div>
    ))}
  </div>
</div>


      {/* Clients */}
      <div className={styles.section}>
        <h2>{t("aboutus.clients")}</h2>
        <div className={styles.grid}>
          {aboutData.clients[lang].map((client, i) => (
            <div key={i} className={styles.card}>{client}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
