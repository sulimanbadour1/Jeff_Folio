import styles from "../../stylesheets/sections/Awards.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
const Awards = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray(".text");
    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <section className="Contact section" id="awards">
      <div className="container">
        <h2 className="Contact-h2 section-head">Activities & Awards.</h2>
        <div className="container-sm">
          <div className={styles.container}>
            <h1 className={styles.text}>
              Excellence Diploma award
              <span className={styles.span}>
                Top 5/125 graduates at Innopolis University.
              </span>
            </h1>
            <h1 className={styles.text}>
              NEERC Winner
              <span className={styles.span}>
                2017 and 2018 in Saint Petersburg, Russia.
              </span>
            </h1>
            <h1 className={styles.text}>
              Facebook Hackercup
              <span className={styles.span}>Ranked 213 in round 2</span>
            </h1>
            <h1 className={styles.text}>
              Facebook Hateful Memes Challenge
              <span className={styles.span}> Ranked 32/3172</span>
            </h1>
            <h1 className={styles.text}>
              Google Kickstart
              <span className={styles.span}> Ranked 34/10000</span>
            </h1>
            <h1 className={styles.text}>
              International Physics Olympiad
              <span className={styles.span}>
                HM award in IPhO 46th, Mumbai, India.
              </span>
            </h1>
            <h1 className={styles.text}>
              IEEE 2021
              <span className={styles.span}>
                Hateful Memes Classification using Machine Learning
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
