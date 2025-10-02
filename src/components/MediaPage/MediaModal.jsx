"use client";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "../../styles/_media.module.scss";

export default function MediaModal({ show, handleClose, media }) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  if (!media) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{isArabic ? media.title_ar : media.title_en}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* ✅ لو فيه فيديو نعرض iframe */}
        {media.video ? (
          <div className="videoWrapper">
            <iframe
              width="100%"
              height="400"
              src={media.video}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : media.gallery?.length > 1 ? (
          <Swiper modules={[Navigation]} navigation spaceBetween={20}>
            {media.gallery.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`slide-${idx}`} className="mainImg" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <span className={styles.mainImgContainer}>
            {" "}
            <img
              src={media.gallery[0]}
              alt="single-media"
              className={styles.mainImg}
            />
          </span>        )}

        {/* Description */}
        <div className="mediaBox">
          <h3>{isArabic ? media.title_ar : media.title_en}</h3>
          <p>{isArabic ? media.desc_ar : media.desc_en}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
