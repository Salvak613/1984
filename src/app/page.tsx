"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { appRoutes } from "@/data/ROUTES";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { scramble, ScrambleOptions } from "@/utils/scramble";

export default function Home() {
  const [messages] = useState([{ text: "Commencer à travailler", delay: 0 }]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const animate = () => {
    if (!containerRef.current) return;

    const paragraphs = containerRef.current.querySelectorAll("p");

    messages.forEach((data, index) => {
      const element = paragraphs[index];
      if (element) {
        element.textContent = "";
        const options: ScrambleOptions = { delay: data.delay || 0 };
        scramble(element, data.text, options);
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const redirection = () => {
    window.location.href = "/work";
  };

  return (
    <div id="container" className={styles.container} ref={containerRef}>
      <div className={styles.televisionContainer}>
        <div className={styles.border}>
          <div className={styles.television}>
            <img
              src="./img/eye.png"
              alt="Logo de la Dynastie 1984"
              className={styles.logo}
            />

            <span>Big Brother's watching</span>
          </div>
        </div>
      </div>
      <div id="message">
        {messages.map((message, index) => (
          <p className={styles.message} onClick={redirection} key={index}></p>
        ))}
      </div>
    </div>
  );
}
