
"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_ourprojects.module.scss";
import ourProjectsData from "./OurProjectsData";
import ProjectModal from "./ProjectModal";

export default function OurProjects() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [activeTab, setActiveTab] = useState("saudi_aramco");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const categories = [
    { key: "saudi_aramco", en: "Saudi Aramco", ar: "أرامكو السعودية" },
    { key: "industrial_cities", en: "Industrial Cities Authority", ar: "الهيئة الملكية للمدن الصناعية" },
    { key: "railways", en: "General Authority for Railways", ar: "الهيئة العامة للسكك الحديدية" },
    { key: "ministry_housing", en: "Ministry of Housing", ar: "وزارة الإسكان" },
    { key: "municipal_affairs", en: "Municipal & Rural Affairs", ar: "وزارة الشؤون البلدية والقروية" },
    { key: "water_electricity", en: "Water & Electricity", ar: "وزارة المياه والكهرباء" },
    { key: "national_housing", en: "National Housing Company", ar: "الشركة الوطنية للإسكان" },
    { key: "qiddiya", en: "Qiddiya Investment Company", ar: "شركة القدية للاستثمار" },
    { key: "dammam_airports", en: "Dammam Airports Company", ar: "شركة مطارات الدمام" },
    { key: "transportation", en: "Ministry of Transportation", ar: "وزارة النقل" },
    { key: "guards", en: "Border Guards", ar: "حرس الحدود" },
    { key: "miskcity", en: "The Misk City Company", ar: "شركة مسك سيتي" },
  ];

  return (
    <section className={`${styles.projects} container`}>
      <h2 className={styles.title}>{t("projects.title")}</h2>

      {/* Custom Tabs */}
      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`${styles.tabButton} ${
              activeTab === cat.key ? styles.active : ""
            }`}
            onClick={() => setActiveTab(cat.key)}
          >
            {isArabic ? cat.ar : cat.en}
          </button>
        ))}
      </div>

      {/* Grid Projects */}
      <div className={styles.grid}>
        {ourProjectsData[activeTab]?.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            onClick={() => handleOpen(project)}
          >
            <img src={project.img} alt={project.title_en} />
            <div className={styles.overlay}>
              <span>{isArabic ? "عرض المزيد" : "See More"}</span>
            </div>
            <div className={styles.caption}>
              {isArabic ? project.title_ar : project.title_en}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        show={showModal}
        handleClose={handleClose}
        project={selectedProject}
      />
    </section>
  );
}
