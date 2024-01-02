import Image from "next/image";
import { Contex } from "@/context/store";
import { useContext } from "react";
import styles from "./styles.module.css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Sponsor({ className }) {
  const { dummyapi } = useContext(Contex);
  return (
    <div className={`${styles.gradien} py-5 ${className}`}>
      <Swiper
        loop
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        parallax
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper3"
      >
        {dummyapi.seponsor.map((e, i) => (
          <SwiperSlide className="rounded-3" key={i}>
            <div className="bg-light my-3 sizes d-flex justify-content-center align-items-center">
              <Image
                alt="foto"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "50%", height: "auto" }}
                src={e}
                className={`card-img-top m-auto ${styles.bordernone}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
