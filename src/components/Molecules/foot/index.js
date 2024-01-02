"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Contex } from "@/context/store";
import { useContext } from "react";
export default function Footers() {
  const { dummyapi } = useContext(Contex);
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.containercentered}`}>
        <div className="my-auto container">
          <Image
            alt="logofoot"
            width={285}
            height={115}
            src={dummyapi.foot.logo}
            className={`mb-5`}
          ></Image>
          <div className="row">
            <p className={`col-lg-8 text-justify text-white ${styles.center}`}>
              Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh
              Detikhealth secara gratis untuk masyarakat Indonesia. Ajak
              keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023
              lalu menangkan hadiah utama serta doorprize dengan total puluhan
              juta rupiah
            </p>
            <div className="col text-center text-white">
              <p className="fs-6 fw-light w-100">Connect With Us</p>
              <Image
                alt="logofoot"
                width={184.56}
                height={32}
                src={"/foot/circle.png"}
              ></Image>
            </div>
          </div>
          <div className={`mt-4 pt-3 border-top border-light text-white`}>
            <p>Copyright @ 2023 detikcom. All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
