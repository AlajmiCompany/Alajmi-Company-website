"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_services.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

export default function Services() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <section className={styles.services} id="services">
      <div className="container text-center">
        <h2>{t("services.title")}</h2>
        <p className={styles.subtitle}>{t("services.subtitle")}</p>

<Swiper
  modules={[Navigation]}
  spaceBetween={30}
  slidesPerView={3}
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  loop={true}
  breakpoints={{
    1200: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
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
  <div className="custom-prev"><IoIosArrowDropleft /></div>
  <div className="custom-next"><IoIosArrowDropright /></div>
</div>

      </div>
    </section>
  );
}
