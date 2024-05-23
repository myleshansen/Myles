import { useState } from "react";

import Image from "next/image";
import styles from "./About.module.css";
import { FaAngleDoubleDown, FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div id="about" className='flex max-h-[80vh]'>
      <div className='flex flex-col max-w-[50vw] mt-48 ml-20'>
        <div className='mb-20'>
          <h1 className="font-raleway_e_light font-bold text-8xl">A little about <span style={{ color: "#3f9af7" }}>me...</span></h1>
        </div>
        <div className='font-raleway_e_light text-3xl mb-12'>
          <p>
            Current <span style={{ color: "#3f9af7" }}>software</span> engineer at Deloitte.
            Known mainly for security, blockchain/DeFi, AI, and full-stack engineering.
          </p>
        </div>
        <div>
          <h3 className='font-raleway_e_light_italic text-4xl font-bold mb-12'>
            Some technologies I work with
          </h3>
          <div className='flex flex-row flex-wrap mt-4'>
            <ul className='font-raleway_e_light text-2xl mr-16 mb-4 list-disc pl-[40px]'>
              <li>JavaScript (ES6+)/TypeScript</li>
              <li>Go</li>
              <li>React/Next.js</li>
              <li>Solidtiy</li>
              <li>Ethereum</li>
            </ul>
            <ul className='font-raleway_e_light text-2xl mr-16 mb-4 list-disc pl-[40px]'>
              <li>Rust</li>
              <li>Python</li>
              <li>Java</li>
              <li>AWS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <p className='font-raleway_e_light text-2xl mt-4'>
            Outside of my work, I&apos;m interested in all facets of design. I
            also love staying active & exploring my many hobbies. I dabble in just about
            everything.
          </p>
          <div id="projects" className='flex items-center'>
            <h1 className='font-raleway_bold text-8xl font-bold mt-8'>work<span style={{ color: "#3f9af7" }}>.</span></h1>
            <Link href="#projects">
              <FaArrowDown className='ml-8 mt-8 text-7xl hover:text-[#3f9af7]' />
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