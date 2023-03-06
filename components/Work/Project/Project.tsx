import styles from "./Project.module.css";
import Image from "next/image";

const Project = (props: any) => {
  return (
    <div id="project" className={styles.project}>
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
  );
};

export default Project;
