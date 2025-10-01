"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_whyAjami.module.scss";
import whyAjamiData from "./whyAjamiData";

export default function WhyAjami() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  return (
    <section className={styles.why}>
      <div className="container">

        {/* Hero */}
        <div className={styles.hero}>
          <h1 className={styles.title}>{whyAjamiData.hero.title[lang]}</h1>
          <p className={styles.intro}>{whyAjamiData.hero.intro[lang]}</p>
        </div>

        {/* History */}
        <div className={styles.section}>
          <h2>{lang === "ar" ? "تاريخنا" : "Our History"}</h2>
          <p className={styles.text}>{whyAjamiData.history[lang]}</p>
        </div>

        {/* Divisions */}
        <div className={styles.section}>
          <h2>{lang === "ar" ? "أقسامنا" : "Our Divisions"}</h2>
          <div className="row">
            {whyAjamiData.divisions[lang].map((d, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className={styles.card}>
                  <img src={d.img} alt={d.title} className={styles.cardImage} />
                  <h3 className={styles.cardTitle}>{d.title}</h3>
                  <p className={styles.cardText}>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className={styles.section}>
          <h2>{lang === "ar" ? "نقاط القوة" : "Our Strengths"}</h2>
          <ul className={styles.list}>
            {whyAjamiData.strengths[lang].map((s, i) => (
              <li key={i}>
                <span className={styles.check}>✔</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div className={styles.section}>
          <h2>{lang === "ar" ? "مكاتبنا" : "Our Offices"}</h2>
          <p className={styles.text}>{whyAjamiData.offices[lang]}</p>
        </div>

      </div>
    </section>
  );
}
