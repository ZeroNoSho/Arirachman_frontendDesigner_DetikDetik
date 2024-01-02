import Cards from "@/components/Atom/card";
import Btn from "@/components/Atom/button";
import styles from "./styles.module.css";
export default function Events({ className }) {
  return (
    <div className={`container mb-6 mt-6 ${className}`}>
      <div className="row align-items-stretch">
        <div className="col-md-6">
          <Cards
            className={`gradien p-4 rounded-5 text-white container-4-3 ${styles.gradien}`}
            line={"fw-bold fs-1 fst-italic"}
            event={{
              img: "/event/1.png",
              judul: "10K FUN RUN",
              ket: "Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!",
            }}
            width={"auto"}
            height={"auto"}
            rounded={"rounded-5 m-auto p-4"}
          ></Cards>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <Cards
            line={"fw-bold fs-2 fst-italic"}
            event={{
              judul: "GRATIS DAN BERHADIAH",
              ket: "Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!",
            }}
            className={`rounded-5 py-3 px-4 text-white ${styles.gradien}`}
          ></Cards>
          <Cards
            line={"fw-bold fs-2 fst-italic"}
            event={{
              judul: "50+ TENANT BAZZAR ",
              ket: "Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion",
            }}
            className={`rounded-5 py-3 px-4 text-white ${styles.gradien}`}
          ></Cards>
          <Cards
            line={"fw-bold fs-2 fst-italic"}
            event={{
              img: "/event/2.png",
              judul: "SPECIAL",
              judul2: "PERFORMANCE",
              ket: "Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!",
            }}
            className={`flex-row rounded-5  p-4 text-white ${styles.gradien} ${styles.flexdirection} ${styles.hiddens2}`}
            rounded={`rounded-4 m-md-auto ${styles.squareimage}`}
          ></Cards>
        </div>
      </div>
      <Cards
        line={"fw-bold fs-2 fst-italic"}
        event={{
          img: "/event/2.png",
          judul: "SPECIAL",
          judul2: "PERFORMANCE",
          ket: "Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!",
        }}
        className={`flex-row rounded-5 gradien p-4 text-white ${styles.gradien} ${styles.flexdirection} ${styles.hiddens}`}
        rounded={`rounded-4 m-md-auto ${styles.squareimage}`}
        full={true}
      ></Cards>
      <Btn
        text={"DAFTAR SEKARANG"}
        className={"mt-5 container mx-auto w-fit"}
        link={"https://event.detik.com/"}
      ></Btn>
    </div>
  );
}
