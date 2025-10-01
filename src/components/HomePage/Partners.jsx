"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_partners.module.scss";
import partnersData from "../HomePage/data/partnersData";

export default function Partners() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className={styles.partners} id="partners">
      <div className="container text-center">
        <h2>{lang === "ar" ? "شركاؤنا" : "Our Partners"}</h2>
        <div className={styles.grid}>
          {partnersData.map((partner) => (
            <div key={partner.id} className={styles.card}>
              <img src={partner.img} alt={partner[`name_${lang}`]} />
              <p>{partner[`name_${lang}`]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
