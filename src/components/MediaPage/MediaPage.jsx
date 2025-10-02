// src/components/MediaPage/MediaPage.jsx
"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_media.module.scss";
import mediaData from "./MediaData";
import MediaModal from "./MediaModal";

export default function MediaPage() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (media) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section className={`${styles.media} container`}>
      <h2 className={styles.title}>{t("media.title")}</h2>

      <div className={styles.grid}>
        {mediaData.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => handleOpen(item)}
          >
            <img src={item.img} alt={item.title_en} />
            <div className={styles.overlay}>
              <span>{isArabic ? "عرض التفاصيل" : "View Details"}</span>
            </div>
          </div>
        ))}
      </div>

      <MediaModal
        show={showModal}
        handleClose={handleClose}
        media={selectedMedia}
      />
    </section>
  );
}
