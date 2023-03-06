import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  SwapRightOutlined,
  CaretDownOutlined,
  DownOutlined,
} from "@ant-design/icons";

import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      {/*
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="#about" className={styles.navbarLink}>
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
  */}
      <nav className={styles.navbar}>
        <Link href="#about" className={styles.navbarLink}>
          <FaChevronDown className={styles.arrow} />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
