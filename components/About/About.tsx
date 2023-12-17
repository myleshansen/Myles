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
          <h1>A little about <span style={{ color: "#3f9af7" }}>me...</span></h1>
        </div>
        <div className={styles["about-text"]}>
          <p>
            I am currently a <span style={{ color: "#3f9af7" }}>blockchain</span> engineer at Deloitte. I graduated from the
            University of Colorado, Boulder studying computer science.
            I am interested in just about any technology surrounding blockchain/DeFi, AI, and web development.
          </p>
        </div>
        <div className={styles["about-skills"]}>
          <h3 className={styles["about-skills-header"]}>
            Some technologies I work with
          </h3>
          <div className={styles["skills-container"]}>
            <ul className={styles["skills-list"]}>
              <li>JavaScript (ES6+)/TypeScript</li>
              <li>Solidity</li>
              <li>React/Next</li>
              <li>Ethereum</li>
              <li>Node.js</li>
            </ul>
            <ul className={styles["skills-list"]}>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>AWS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <p className={styles["skills-footer"]}>
            Outside of my work, I&apos;m interested in all facets of design. I
            also love staying active & exploring my many hobbies. I dabble in just about
            everything.
          </p>
          <div id="projects" className={styles["transition-container"]}>
            <h1 className={styles["experience-transition"]}>My Work</h1>
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
