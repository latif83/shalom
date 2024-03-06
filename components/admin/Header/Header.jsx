"use client";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = ({ cPage }) => {
  const [showMNav, setShowMNav] = useState(false);

  return (
    <>
      <header className="sm:px-12 px-3 py-2 flex justify-between items-center bg-blue-400">
        <Image
          src="/logo.jpg"
          width={200}
          height={200}
          className="sm:w-20 sm:h-20 w-16 h-16 rounded-full"
          alt=""
        />
        <nav className="sm:flex hidden gap-4">
          <Link
            href="/admin"
            className={`${
              cPage == "home" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/events"
            className={`${
              cPage == "events" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Events
          </Link>
          <Link
            href="/admin/pastors"
            className={`${
              cPage == "pastors" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Pastors
          </Link>
          <Link
            href="/admin/members"
            className={`${
              cPage == "members" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Members
          </Link>
        </nav>
        <button onClick={() => setShowMNav(!showMNav)}>
          {showMNav ? (
            <FontAwesomeIcon icon={faXmark} color="red" className="text-lg" />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} className="text-lg" />
          )}
        </button>
      </header>
      {showMNav && (
        <div className="bg-blue-400 sm:px-12 px-3 py-2 flex flex-col gap-8 ">
          <Link
            href="/admin"
            className={`${
              cPage == "home" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/events"
            className={`${
              cPage == "events" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Events
          </Link>
          <Link
            href="/admin/pastors"
            className={`${
              cPage == "pastors" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Pastors
          </Link>
          <Link
            href="/admin/members"
            className={`${
              cPage == "members" && "text-gray-200 font-bold"
            } hover:text-red-700`}
          >
            Members
          </Link>
        </div>
      )}
    </>
  );
};
