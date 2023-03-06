import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles["contact-left"]}>
        <div>
        </div>
      </div>
      <div className={styles["contact-right"]}>
        <div className={styles.title}>
          <h1>Connect with me!</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
