import React from "react";
import styles from "../../stylesheets/elements/Project.module.css";
import { RiArrowRightLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

export default function Project({
  index,
  title,
  setModal,
  label,
  description,
  link,
}) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <div className={styles.desc}>
        <div className={styles.maindesc}>
          <h2>{title}</h2>
          <p>{label}</p>
        </div>
        <div className={styles.seconddesc}>
          <p>{description}</p>
        </div>
        <div className={styles.CardLink}>
          <a href={link} className={styles.CardLinkProject} target="_blank">
            View Project <RiArrowRightLine className={styles.CardIconArrow} />
          </a>
        </div>
      </div>
    </div>
  );
}
