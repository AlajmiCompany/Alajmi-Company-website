"use client";
import styles from "../../styles/_jobs.module.scss";

export default function JobCard({ job, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(job)}>
      <img src={job.img} alt={job.title_en} />
      <div className={styles.overlay}>
        <h3>{job.title_en}</h3>
      </div>
    </div>
  );
}
