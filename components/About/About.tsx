import { useState } from "react";

import Image from "next/image";
import styles from "./About.module.css";
import { FaAngleDoubleDown, FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div id="about" className={styles.about}>
      <div className={styles["about-left"]}>
        <div className={styles.title}>
          <h1>About me</h1>
        </div>
        <div className={styles["about-text"]}>
          <p>
            I am currently a senior undergrad studying computer science at CU
            Boulder. I am interested in full stack development, and am currently
            learning about data science and machine learning. I am looking
            for a full time position as a software engineer.
          </p>
        </div>
        <div className={styles["about-skills"]}>
          <h3 className={styles["about-skills-header"]}>
            Here are some technologies I work with
          </h3>
          <div className={styles["skills-container"]}>
            <ul className={styles["skills-list"]}>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React/Next</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
            <ul className={styles["skills-list"]}>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>MongoDB</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          <p className={styles["skills-footer"]}>
            Outside of my work, I&apos;m interested in all facets of design. I
            also love working out and staying active. I dabble in just about
            everything.
          </p>
          <div id="projects" className={styles["transition-container"]}>
            <h1 className={styles["experience-transition"]}>Projects</h1>
            <Link href="#projects">
              <FaArrowDown className={styles["transition-arrow"]} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["about-right"]}>
        <div
          className={styles["about-img-container"]}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <Image
              src="/walking-towards.GIF"
              alt=""
              fill
              className={styles["about-img"]}
              priority
            />
          ) : (
            <Image
              src="/walking-away.GIF"
              alt=""
              fill
              className={styles["about-img"]}
              priority
            />
          )}
        </div>
        <div className={styles.vl}></div>
      </div>
    </div>
  );
};

export default About;
