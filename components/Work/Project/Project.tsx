import { useState } from 'react';
import styles from "./Project.module.css";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

const Project = (props: any) => {
  const [hover, setHover] = useState(false);

  return (
    <CustomCursor>
      <div
        id="project"
        className={`${styles.project} ${hover ? styles.hover : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.content}>
          <div className={styles.number}>
            <h1>{props.num}</h1>
          </div>
          <div className={styles.logo}>
            <Image
              src={props.logoSrc}
              alt="Logo"
              width={props.width}
              height={props.height}
              priority
            />
          </div>
        </div>
      </div>
    </CustomCursor>
  );
};

export default Project;