import Link from "next/link";
import styles from "./Navbar.module.css";
import { SwapRightOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/" className={styles.navbarLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="#work" className={styles.navbarLink}>
              Work
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="#contact" className={styles.navbarLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.blog}>
        <Link href="/blog" className={styles.blogLink}>
          Blog
        </Link>
        <SwapRightOutlined className={styles.blogArrow}/>
      </div>
    </>
  );
};

export default Navbar;
