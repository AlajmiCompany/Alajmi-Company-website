"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import styles from "../../styles/_hero.module.scss";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>{t("hero.heroTitle")}</h1>
        <p>{t("hero.heroSubtitle")}</p>
        <Link href="#designs" className="btn btn-primary">
          {t("hero.heroButton")}
        </Link>
      </div>
    </section>
  );
}
