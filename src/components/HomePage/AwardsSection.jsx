"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_awards.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import awardsData from "../HomePage/data/awardsData";

export default function AwardsSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.awards} id="awards">
      <div className="container text-center">
        <h2>{t("awards.title")}</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          className={styles.slider}
        >
          {awardsData.map((award) => (
            <SwiperSlide key={award.id}>
              <div className={styles.card}>
                <img src={award.img} alt={`award-${award.id}`} />
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
