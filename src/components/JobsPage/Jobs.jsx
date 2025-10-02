"use client";
import { useState } from "react";
import jobsData from "./JobsData";
import JobCard from "./JobCard";
import JobModal from "./JobModal";
import styles from "../../styles/_jobs.module.scss";

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [show, setShow] = useState(false);

  const handleOpen = (job) => {
    setSelectedJob(job);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section className={styles.jobs}>
      <h2 className={styles.title}>Jobs</h2>
      <div className={styles.grid}>
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} onClick={handleOpen} />
        ))}
      </div>

      <JobModal show={show} handleClose={handleClose} job={selectedJob} />
    </section>
  );
}
