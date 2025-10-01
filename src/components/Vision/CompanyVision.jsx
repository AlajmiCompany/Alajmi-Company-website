"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_companyVision.module.scss";
import companyVisionData from "./companyVisionData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CompanyVision() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const data = companyVisionData[lang];

  return (
    <section className={`${styles.vision} container`}>
      {/* Hero Title */}
      <h1 className={styles.title}>
        {companyVisionData.hero.title[lang]}
      </h1>

      <div className={`row align-items-center ${isArabic ? "flex-row-reverse" : ""}`}>
        {/* Text Side */}
        <div className="col-lg-6 col-md-12">
          <h2>{data.vision.title}</h2>
          <p>{data.vision.text}</p>

          <h2>{data.mission.title}</h2>
          <p>{data.mission.text}</p>

          <h2>{data.values.title}</h2>
          <ul>
            {data.values.items.map((v, i) => <li key={i}><span className={styles.check}>✔</span>{v}</li>)}
          </ul>

          <h2>{data.responsibility.title}</h2>
          <ul>
            {data.responsibility.items.map((r, i) => <li key={i}><span className={styles.check}>✔</span>{r}</li>)}
          </ul>

          <h2>{data.profitability.title}</h2>
          <ul>
            {data.profitability.items.map((p, i) => <li key={i}><span className={styles.check}>✔</span>{p}</li>)}
          </ul>
        </div>

        {/* Image Slider */}
        <div className="col-lg-6 col-md-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{ delay: 3000 }}
            className={styles.slider}
          >
            {companyVisionData.images.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className={styles.imageWrapper}>
                  <img src={slide.img} alt={slide.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
