"use client";
import styles from "./styles.module.css";
import { Contex } from "@/context/store";
import { useContext, useState } from "react";
import Btn from "@/components/Atom/button";
import Cards from "@/components/Atom/card";
export default function Artikel({ className }) {
  const { dummyapi } = useContext(Contex);
  const [klik, Setklik] = useState(0);
  return (
    <div className={`${styles.artikel} ${className}`}>
      <div className="container mt-5">
        <div className="text-center fs-2 fw-bold">ARTIKEL TERKAIT</div>
        <div className="d-flex justify-content-center my-5">
          <div
            className={`btn-group m-auto rounded-pill  ${styles.gradien}`}
            role="group"
            aria-label="Button group btn-primary "
          >
            <p
              className={`btn rounded-pill ${klik == 0 ? styles.bgwhite : ""}`}
              onClick={() => {
                Setklik(0);
              }}
            >
              <span className="mx-4 text-white ">Artikel</span>
            </p>
            <p
              className={`btn rounded-pill ${klik == 1 ? styles.bgwhite : ""}`}
              onClick={() => {
                Setklik(1);
              }}
            >
              <span className="mx-4 text-white">Foto</span>
            </p>
            <p
              className={`btn rounded-pill ${klik == 2 ? styles.bgwhite : ""}`}
              onClick={() => {
                Setklik(2);
              }}
            >
              <span className="mx-4 text-white">Video</span>
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 pb-6">
          {dummyapi.artikel.map((e, index) => (
            <Cards
              key={index}
              event={e}
              line={false}
              className={`m-auto ${styles.flexdirection}`}
              rounded={`${styles.size} rounded-5`}
              hovercolor={true}
            ></Cards>
          ))}
          <Btn
            text={"LIHAT LEBIH BANYAK"}
            className={"mt-5 container mx-auto w-fit"}
            link={
              "https://www.detik.com/search/searchall?query=fun+run&siteid=2"
            }
          ></Btn>
        </div>
      </div>
    </div>
  );
}
