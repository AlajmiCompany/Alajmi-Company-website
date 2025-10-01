"use client";
import { useTranslation } from "react-i18next";
import projectsData from "../HomePage/data/projectsData";
import styles from "../../styles/_projects.module.scss";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  return (
    <section className={styles.projects} id="projects">
      <div className="container text-center">
        <h2>{t("projects.title")}</h2>
        <p className={styles.subtitle}>{t("projects.subtitle")}</p>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.card}>
              <img src={project.img} alt={lang === "ar" ? project.title_ar : project.title_en} />
              <h3>{lang === "ar" ? project.title_ar : project.title_en}</h3>
              <p>{lang === "ar" ? project.desc_ar : project.desc_en}</p>
              <a href="#" className={styles.more}>{t("projects.more")}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
