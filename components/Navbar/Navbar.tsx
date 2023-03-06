import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  SwapRightOutlined,
  CaretDownOutlined,
  DownOutlined,
} from "@ant-design/icons";

import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="#about" className={styles.navbarLink}>
        {isClicked ? (
          <FaChevronDown style={{display: 'none'}}/>
        ) : (
          <FaChevronDown className={styles.arrow} onClick={() => setIsClicked(true)}/>
        )}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
