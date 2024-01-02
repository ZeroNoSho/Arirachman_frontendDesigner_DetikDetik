import Image from "next/image";
import styles from "./styles.module.css";
export default function Cards({
  className,
  event,
  line,
  width,
  height,
  rounded,
  full,
}) {
  return (
    <div
      className={`card mb-3 border border-0 ${className} ${styles.hover}`}
      style={full ? { maxWidth: "100%" } : { maxWidth: "35rem" }}
    >
      {event.img ? (
        <Image
          alt="foto"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: width ? width : "400px",
            maxHeight: height ? height : "300px",
          }}
          src={event && event.img}
          className={`card-img-top ${rounded ? rounded : "rounded-5"}`}
        />
      ) : (
        ""
      )}

      <div className="card-body">
        <h5 className={`card-title ${line ? line : styles.twolines}`}>
          {event && event.judul}
          <br></br>
          {event && event.judul2}
        </h5>
        <p className="card-text fs-6 fw-lighter">
          {(event && event.tanggal) || (event && event.ket)}
        </p>
      </div>
    </div>
  );
}
