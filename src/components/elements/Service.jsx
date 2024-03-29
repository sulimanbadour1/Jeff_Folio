import styles from "../../stylesheets/elements/Service.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function Service({ project, theme }) {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src, alt, src_dark } = project;
  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.project}
    >
      <p>{title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        {theme === "light" ? (
          <img src={src} alt={alt}></img>
        ) : (
          <img src={src_dark} alt={alt}></img>
        )}
      </motion.div>
      <p>{title2}</p>
    </div>
  );
}
