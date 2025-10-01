"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_board.module.scss";
import boardData from "./boardData";

export default function BoardOfDirectors() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const members = boardData[lang];

  return (
    <section className={`${styles.board} container`}>
      <h1 className={styles.title}>{t("boardofD.title")}</h1>

      <div className="row">
        {members.map((member, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-4">
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={member.img} alt={member.name} />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <h4 className={styles.position}>{member.title}</h4>
              <p className={styles.desc}>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
