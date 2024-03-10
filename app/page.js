"use client";
import { Header } from "@/components/header";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faInfoCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Events } from "@/components/events/Events";

export default function Home() {
  const [slideSettings, setSlideSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  });

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 700 && windowWidth > 600) {
      setSlideSettings((prev) => {
        return { ...prev, slidesToShow: 3 };
      });
    } else if (windowWidth < 600 && windowWidth > 700) {
      setSlideSettings((prev) => {
        return { ...prev, slidesToShow: 2 };
      });
    } else if (windowWidth < 500 && windowWidth > 200) {
      setSlideSettings((prev) => {
        return { ...prev, slidesToShow: 1.2 };
      });
    } else if (windowWidth < 200 && windowWidth > 0) {
      setSlideSettings((prev) => {
        return { ...prev, slidesToShow: 1 };
      });
    }
  }, []);

  const images = [
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg3.jpg",
    "/bg4.jpg",
    "/bg5.jpg",
    "/bg6.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <main>
      <div className={`${styles.container}`}>
        <div style={{ height: "12%" }}>
          <Header />
        </div>
        <div
          className={`${styles.banner} grid sm:grid-cols-2 gap-4 text-white sm:pl-12 pl-3`}
          style={{ height: "88%" }}
        >
          <div
            style={{ zIndex: 9999999 }}
            className="relative flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold">SHALOM PRAYER MINISTRY INT.</h1>
            <p className="text-xl text-red-500">MPAEBO FIE</p>
            <hr className="w-16 h-2 mt-3 bg-red-500 border-0 rounded" />
            <p className="mt-5">
              Christianity holds a significant place in the cultural and
              religious landscape of Ghana, contributing to the nation's rich
              tapestry of faith and tradition.
            </p>
            <button
              style={{ width: "max-content" }}
              className="bg-red-500 rounded p-3 mt-5"
            >
              Read More...
            </button>
          </div>
          <div
            style={{ zIndex: 99999999999 }}
            className="relative sm:flex hidden justify-center overflow-hidden"
          >
            <div
              className="rounded-bl-full border-l-4 relative border-red-500 overflow-hidden w-full"
              style={{ height: 700 }}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  width={200}
                  height={200}
                  className={`${styles.image} ${
                    currentImageIndex === index ? styles.visible : styles.hidden
                  }`}
                />
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <div className="sm:px-12 px-3 py-12 bg-gradient-to-r from-transparent to-gray-200">
        <h1 className="text-2xl text-red-500 font-bold">
          SHALOM PRAYER MINISTRY INTERNATIONAL{" "}
        </h1>
        <hr className="w-16 h-2 mb-3 bg-red-500 border-0 rounded" />
        <p>
          Shalom Prayer Ministry International, is a Non-Profit and
          Non-Governmental organisation duly registered with the registrar of
          companies to operate as a Church nestled in the heart of Offankor in
          the Greater Accra Region of Ghana, is a vibrant and dynamic Christian
          community dedicated to worship, spiritual growth, and community
          engagement. Established with a fervent commitment to the teachings of
          Jesus Christ, the Ministry seeks to create an atmosphere where
          individuals can encounter God, experience transformative faith, and
          build meaningful connections with one another.
        </p>
      </div>

      <div style={{ overflowX: "hidden" }} className="pb-10">
        <div className="slider-container">
          <Slider {...slideSettings}>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg1.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg2.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg3.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg4.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg5.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg6.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg7.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg8.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg9.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-full object-cover"
                style={{ height: 200 }}
                src="/bg10.jpg"
                width={200}
                height={200}
              />
            </div>
          </Slider>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#002b67" }}
        className="sm:px-12 px-3 py-12 text-white relative"
      >
        <h1 className="text-3xl font-bold">Founding Principles</h1>
        <hr className="w-16 h-2 mb-3 bg-red-500 border-0 rounded" />
        <p>
          The inception of Shalom Prayer Ministry International can be traced
          back to the year 2020 when a group of devoted believers felt a divine
          calling to establish a place of worship that would serve as a beacon
          of hope and spiritual nourishment in Ghana and beyond. Grounded in the
          principles of love, compassion, and a deep reverence for the Holy
          Scriptures, the founders envisioned a ministry that would not only
          meet the spiritual needs of its members but also actively contribute
          to the well-being of its members and the local community.
        </p>

        <div className="flex flex-wrap mt-6">
          <div className="w-full sm:w-1/2 px-2">
            <div
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                paddingTop: "1rem", // Adjust padding as needed
              }}
            >
              <img
                src="/woman11.jpg"
                alt="Founder"
                className="w-full sm:max-w-xs mx-auto rounded-full shadow-lg"
              />
              <p className="text-center mt-2 font-bold text-red-500">
                Founder of SHALOM PRAYER MINISTRY INT.
              </p>
              <p className="text-center">PROPHETESS EWURA ABENA SERWAA SAKYI</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
            <h2 className="text-2xl font-bold mb-3">Leadership Structure</h2>
            <hr className="w-16 h-2 mb-3 bg-red-500 border-0 rounded" />
            <p>
              The Ministry operates under the leadership of a dedicated pastoral
              team, led by the Senior Pastor. The Senior Pastor, appointed
              through a thoughtful and prayerful process, provides spiritual
              oversight and direction. Additionally, a Church Board, composed of
              elected leaders, collaborates with the pastoral team to ensure
              effective governance and operational efficiency. There is a
              Deaconship team responsible for various departments and units of
              the church.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Membership and Community Engagement
            </h2>
            <hr className="w-16 h-2 mb-3 bg-red-500 border-0 rounded" />
            <p>
              Membership at Shalom Prayer Ministry International is open to all
              who profess faith in Jesus Christ. The Ministry places a strong
              emphasis on inclusivity, welcoming individuals from various
              backgrounds and walks of life. Members actively participate in
              worship services, prayer meetings, and outreach programs designed
              to positively impact the community. Shalom Prayer Ministry
              International views community engagement as an integral aspect of
              its mission, consistently seeking ways to uplift and empower those
              in need through charitable initiatives and social outreach.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">Statement of Faith</h2>
            <hr className="w-16 h-2 mb-3 bg-red-500 border-0 rounded" />
            <p>
              The Ministry's beliefs are firmly rooted in the Holy Bible, and
              its Statement of Faith serves as a guiding document for members.
              It articulates the core tenets of Christianity that form the
              doctrinal foundation of the Ministry, ensuring unity of faith
              among its diverse congregation. We believe in the totality of the
              infallible word of God and its application to our lives on earth.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Mission and Purpose
            </h2>
            <hr className="w-16 h-2 mb-3 bg-red-500 border-0 rounded" />
            <p>
              At the core of Shalom Prayer Ministry International's mission is
              the unwavering commitment to proclaim the Gospel of Jesus Christ.
              The Ministry endeavours to improve an environment where
              individuals can cultivate a personal relationship with God through
              prayer, worship, prophecies, and biblical teachings. In line with
              the teachings of Jesus, the Ministry is dedicated to reaching out
              to the marginalized and providing practical support to those in
              need within the Greater Accra Region and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:px-12 px-3 py-10 bg-gradient-to-r from-transparent to-gray-200">
        <h2 className="text-xl font-bold mb-4">Join Us</h2>
        <p className="mb-4">
          We invite you to join us in worship and community. Take the next step
          and be a part of the Shalom Church family.
        </p>
        <div className="flex items-center mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4">
            Get Directions <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
        </div>

        {/* <h2 className="text-xl font-bold mb-4">Download Bylaws</h2> */}
        <p className="my-4">
          Want to know more about Shalom Church? Download our bylaws below,
          which constitute the guiding principles of our community.
        </p>
        <a
          href="#"
          className="bg-green-500 text-white px-4 py-2 rounded-full inline-flex items-center"
        >
          Download Now <FontAwesomeIcon icon={faDownload} className="ml-2" />
        </a>
      </div>

      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
