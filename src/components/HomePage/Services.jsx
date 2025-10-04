"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_services.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

export default function Services() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const services = t("services.items", { returnObjects: true });

  return (
    <section className={styles.services} id="services">
      <div className="container text-center">
        <h2>{t("services.title")}</h2>
        <p className={styles.subtitle}>{t("services.subtitle")}</p>

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
  navigation={{
    nextEl: isArabic ? ".custom-prev" : ".custom-next",
    prevEl: isArabic ? ".custom-next" : ".custom-prev",
  }}
  loop={true}
  dir={isArabic ? "rtl" : "ltr"}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    1200: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  }}
  className={styles.slider}
>
  {services.map((service, index) => (
    <SwiperSlide key={index}>
      <div className={styles.card}>
        <img src={service.img} alt={service.title} />
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <a href="#" className={styles.more}>
          {t("more", { defaultValue: "المزيد" })}
        </a>
      </div>
    </SwiperSlide>
  ))}
</Swiper>



{/* controls */}
<div className={styles.controls}>
  {isArabic ? (
    <>
      <div className="custom-next"><IoIosArrowDropright /></div>
      <div className="custom-prev"><IoIosArrowDropleft /></div>
    </>
  ) : (
    <>
      <div className="custom-prev"><IoIosArrowDropleft /></div>
      <div className="custom-next"><IoIosArrowDropright /></div>
    </>
  )}
</div>


      </div>
    </section>
  );
}
