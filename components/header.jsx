"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div
      className={`flex relative h-full justify-between border-b-4 border-red-500 items-center shadow-lg sm:px-12 px-3 ${styles.container}`}
    >
      <div className="h-full py-2">
        <Image
          src="/logo.jpg"
          width={500}
          height={500}
          className="w-auto h-full rounded-full bg-white"
        />
      </div>
      <nav className="text-white text-sm font-semibold sm:flex hidden gap-2 h-full">
        <Link
          className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
          href="/"
        >
          HOME
        </Link>
        <Link
          className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
          href="/"
        >
          ABOUT
        </Link>
        <Link
          className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
          href="/"
        >
          CONTACT
        </Link>
        <Link
          className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
          href="/"
        >
          EVENTS
        </Link>
        <Link
          className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
          href="/"
        >
          LOCATION
        </Link>
      </nav>
      <button onClick={() => setShowNav(true)} className="sm:hidden">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="text-3xl text-white"
        />
      </button>
      {showNav && (
        <div
          className={`${styles.mNav} animate__animated animate__backInUp sm:hidden block absolute w-full top-0 left-0 py-10 px-5`}
        >
          <div className="text-right mb-5">
            <FontAwesomeIcon onClick={()=>setShowNav(false)} icon={faXmark} className="text-3xl" color="red" />
          </div>
          <nav className="text-white font-semibold flex flex-col gap-2">
            <Link
              className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
              href="/"
            >
              HOME
            </Link>
            <Link
              className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
              href="/"
            >
              ABOUT
            </Link>
            <Link
              className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
              href="/"
            >
              CONTACT
            </Link>
            <Link
              className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
              href="/"
            >
              EVENTS
            </Link>
            <Link
              className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center"
              href="/"
            >
              LOCATION
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
