import styles from "./styles.module.css";
import { Contex } from "@/context/store";
import { useContext } from "react";
export default function Btn({ text, className, link }) {
  const { handlegoto } = useContext(Contex);
  return (
    <div className={className}>
      <button
        className={`px-4 btnhome btn rounded-pill border-0 ${styles.btnhome} `}
        onClick={() => {
          handlegoto(link);
        }}
      >
        <span
          className="text-white "
          onClick={() => {
            handlegoto(link);
          }}
        >
          {text}
        </span>
      </button>
    </div>
  );
}
