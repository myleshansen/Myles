import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-column items-center justify-between p-10 sm:px-16">
        <div className="">
          <h1 className="font-jacquard text-[2vw]">H</h1>
          {/* <Image
            src={"/logo-line.svg"}
            alt="Logo"
            width={50}
            height={50}
            priority
          /> */}
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
