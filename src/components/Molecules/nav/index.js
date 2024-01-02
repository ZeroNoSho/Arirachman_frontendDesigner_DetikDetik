"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { Contex } from "@/context/store";
import { useContext, useState } from "react";

export default function Nav() {
  const { dummyapi, handlegoto } = useContext(Contex);
  const [nav, setNav] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light mt-3 ms-auto me-auto text-center fixed-top rounded-pill  ${styles.navbars}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <Image
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100px",
              height: "100%",
            }}
            className={`${styles.logonav}`}
            src={dummyapi.nav.logo}
          ></Image>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            nav ? setNav(false) : setNav(true);
          }}
        >
          {nav ? (
            <Image
              alt="nav"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "20px",
                height: "auto",
              }}
              className={``}
              src={dummyapi.nav.clouse}
              onClick={() => {
                nav ? setNav(false) : setNav(true);
              }}
            ></Image>
          ) : (
            <Image
              alt="nav"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "20px",
                height: "auto",
              }}
              className={``}
              src={dummyapi.nav.nav}
              onClick={() => {
                nav ? setNav(false) : setNav(true);
              }}
            ></Image>
          )}
        </button>
        <div
          id="navbarNavAltMarkup"
          className={`mr-auto collapse navbar-collapse`}
        >
          <div className="navbar-nav ms-auto gap-10">
            <Link
              href={"/"}
              className="py-2 px-4 bd-highlight fw-bold text-center"
            >
              Home
            </Link>

            <Link
              href={"/"}
              className="py-2 px-4 bd-highlight fw-bold text-center"
            >
              Tentang Acara
            </Link>

            <Link
              href={"/"}
              className="py-2 px-4 bd-highlight fw-bold text-center"
            >
              Galeri
            </Link>

            <Link
              href={"/"}
              className="py-2 px-4 bd-highlight fw-bold text-center"
            >
              Berita
            </Link>

            <button
              className={`px-4 bd-highlight btn rounded-pill border-0 ${styles.gradien}`}
              onClick={() => {
                handlegoto("https://event.detik.com/");
              }}
            >
              <span
                className="text-white"
                onClick={() => {
                  handlegoto("https://event.detik.com/");
                }}
              >
                Registrasi
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
