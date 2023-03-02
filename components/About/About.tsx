import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.intro}>
      <div className={styles["intro-about"]}>
        <p>
          Hi I&apos;m Myles, a full-stack developer and computer science undergraduate with a
          passion for creative design and exploring new technologies. With
          expertise in various programming languages and tools, I deliver
          high-quality software solutions. Let&apos;s work together to bring your
          ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
