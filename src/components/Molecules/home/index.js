import Btn from "@/components/Atom/button";
import Image from "next/image";
import styles from "./styles.module.css";
import { Contex } from "@/context/store";
import { useContext } from "react";
export default function Homes({ className }) {
  const { dummyapi } = useContext(Contex);
  return (
    <div className={`${styles.home} ${className}`}>
      <div className={`container ${styles.containercentered}`}>
        <div className="my-auto">
          <Image
            alt="logoevent"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "686px",
              maxHeight: "276px",
            }}
            src={dummyapi.home.event}
            className={`mb-5 ${styles.mt8}`}
          />
          <Btn text={dummyapi.home.btntext}></Btn>
        </div>
      </div>
    </div>
  );
}
