"use client"
import { Header } from "@/components/header";
import Image from "next/image";
import styles from './page.module.css'
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg", "/bg5.jpg", "/bg6.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);
  
  return(
    <main>
      <div className={`h-screen ${styles.container}`}>
      <div style={{height:'12%'}}>
      <Header />
      </div>
      <div className={`${styles.banner} grid sm:grid-cols-2 gap-4 text-white sm:pl-12 pl-3`} style={{height:'88%'}}>
        <div style={{zIndex:99999999999}} className="relative flex flex-col justify-center">
        <h1 className="text-4xl font-bold">SHALOM PRAYER MINISTRY INT.</h1>
        <p className="text-xl text-red-500">MPAEBO FIE</p>
        <hr className="w-16 h-2 mt-3 bg-red-500 border-0 rounded" />
        <p className="mt-5">
        Christianity holds a significant place in the cultural and religious landscape of Ghana, contributing to the nation's rich tapestry of faith and tradition. 
        </p>
        <button style={{width:'max-content'}} className="bg-red-500 rounded p-3 mt-5">
          Read More...
        </button>
        </div>
        <div style={{zIndex:99999999999}} className="relative sm:flex hidden justify-center overflow-hidden">
<div className="rounded-bl-full border-l-4 relative border-red-500 overflow-hidden w-full" style={{height:700}}>
{images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index}`}
          width={200}
          height={200}
          className={`${styles.image} ${currentImageIndex === index ? styles.visible : styles.hidden}`}
        />
      ))}

</div>
        </div>
      {/*  */}
      </div>
      </div>
      <div className="sm:px-12 px-3 py-12 bg-gradient-to-r from-transparent to-gray-200">
<h1 className="text-2xl text-red-500 font-bold">SHALOM PRAYER MINISTRY INTERNATIONAL </h1>
<hr className="w-16 h-2 mb-3 bg-red-500 border-0 rounded" />
<p>
Shalom Prayer Ministry International, is a Non-Profit and Non-Governmental organisation duly registered with the registrar of companies to operate as a Church nestled in the heart of Offankor in the Greater Accra Region of Ghana, is a vibrant and dynamic Christian community dedicated to worship, spiritual growth, and community engagement. Established with a fervent commitment to the teachings of Jesus Christ, the Ministry seeks to create an atmosphere where individuals can encounter God, experience transformative faith, and build meaningful connections with one another.
</p>
      </div>
      <div style={{overflowX:'hidden'}} className="pb-10">
      <div className="slider-container">
          <Slider {...settings}>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg1.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg2.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg3.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg4.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg5.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg6.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg7.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg8.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg9.jpg" width={200} height={200} />
            </div>
            <div className="mr-1">
            <Image className="w-full object-cover rounded" style={{height:200}} src="/bg10.jpg" width={200} height={200} />
            </div>
          </Slider>
        </div>
      </div>
    </main>
  )
}
