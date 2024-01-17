import styles from "../../stylesheets/sections/Projects.module.css";
import { useState } from "react";
import Modal from "./Modal/modal";
import Project from "../elements/Project";
import { projects } from "../../data";

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              label={project.label}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
