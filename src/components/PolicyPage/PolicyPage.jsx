"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_policy.module.scss";
import policyData from "./policyData";

export default function PolicyPage() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  return (
    <section className={`${styles.policy} container`}>
      {/* Title */}
      <div className={styles.hero}>
        <h1>{policyData.hero.title[lang]}</h1>
        <p>{policyData.hero.subtitle[lang]}</p>
      </div>

      {/* Purpose */}
      <div className={styles.section}>
        <h2>{policyData.purpose.title[lang]}</h2>
        <p>{policyData.purpose.text[lang]}</p>
      </div>

      {/* Principles */}
      <div className={styles.section}>
        <h2>{policyData.principles.title[lang]}</h2>
        <p>{policyData.principles.intro[lang]}</p>
        <ul>
          {policyData.principles.list[lang].map((item, i) => (
            <li key={i}>✅ {item}</li>
          ))}
        </ul>
      </div>

      {/* Policy Statement */}
      <div className={styles.section}>
        <h2>{policyData.statement.title[lang]}</h2>
        <ul>
          {policyData.statement.list[lang].map((item, i) => (
            <li key={i}>📌 {item}</li>
          ))}
        </ul>
      </div>

      {/* Responsibility */}
      <div className={styles.section}>
        <h2>{policyData.responsibility.title[lang]}</h2>
        <ul>
          {policyData.responsibility.list[lang].map((item, i) => (
            <li key={i}>⚡ {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
