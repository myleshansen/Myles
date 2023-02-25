import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/" className={styles.navbarLink}>
            Home
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about" className={styles.navbarLink}>
            About
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/projects" className={styles.navbarLink}>
            Projects
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact" className={styles.navbarLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
