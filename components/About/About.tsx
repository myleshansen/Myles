import { useState } from "react";

import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div id="about" className='flex max-h-[90vh]'>
      <div className='hidden lg:block flex flex-col max-w-[50vw] mt-48 ml-20'>
        <div className='mb-20'>
          <h1 className="font-raleway_e_light font-bold text-[4.5vw] sm:text-[3.75vw]">A little about <span style={{ color: "#3f9af7" }}>me</span>...</h1>
        </div>
        <div className='font-raleway_e_light text-[2vw] sm:text-[1.2vw] mb-12'>
          <p>
            Current <span style={{ color: "#3f9af7" }}>software</span> engineer at Deloitte.
            Known mainly for security, blockchain/DeFi, AI, and full-stack engineering.
          </p>
        </div>
        <div>
          <h3 className='font-raleway_e_light_italic text-[2.25vw] sm:text-[1.75vw] font-bold mb-12'>
            Some technologies I work with
          </h3>
          <div className='flex flex-row flex-wrap mt-4'>
            <ul className='font-raleway_e_light text-2xl mr-16 mb-4 list-disc pl-[40px] text-[2vw] sm:text-[1.2vw]'>
              <li>JavaScript (ES6+)/TypeScript</li>
              <li>Go</li>
              <li>React/Next.js</li>
              <li>Solidtiy</li>
              <li>Ethereum</li>
            </ul>
            <ul className='font-raleway_e_light text-2xl mr-16 mb-4 list-disc pl-[40px] text-[2vw] sm:text-[1.2vw]'>
              <li>Rust</li>
              <li>Python</li>
              <li>Java</li>
              <li>AWS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <p className='font-raleway_e_light text-[2vw] sm:text-[1.2vw] mt-4 max-w-[45vw]'>
            Outside of my work, I&apos;m interested in all facets of design. I
            also love staying active & exploring my many hobbies. I dabble in just about
            everything.
          </p>
          <div id="projects" className='flex items-center'>
            <h1 className='font-raleway_bold text-[4.5vw] sm:text-[3.75vw] font-bold mt-8'>work<span style={{ color: "#3f9af7" }}>.</span></h1>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div
          className='hidden lg:block w-[25vw] h-[25vw] sm:w-[30vw] sm:h-[33vw] relative'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <Image
              src="/walking-towards.GIF"
              alt=""
              fill
              className='border rounded-3xl w-[100%] h-[100%] relative object-cover'
              priority
            />
          ) : (
            <Image
              src="/walking-away.GIF"
              alt=""
              fill
              className='border rounded-3xl w-[100%] h-[100%] relative object-cover'
              priority
            />
          )}
        </div>
        <div className='hidden lg:block border border-black border-solid h-[75%] mt-4 ml-24'></div>
      </div>
    </div>
  );
};

export default About;