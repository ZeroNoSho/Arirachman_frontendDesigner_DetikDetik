import { Contex } from "@/context/store";
import { useState } from "react";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

export default function Galeri({ className }) {
  const { dummyapi } = useContext(Contex);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={`container mb-6 ${className}`}>
      <div className="text-center fs-2 fw-bold my-5">
        GALERI SUDIRMAN RUN 2022
      </div>
      <div className="width ">
        <div className="swiper-container">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {dummyapi.galeri.map((e, i) => (
              <SwiperSlide key={i}>
                <Image
                  alt="foto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={e}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {dummyapi.galeri.map((e, i) => (
              <SwiperSlide key={i}>
                <Image
                  alt="foto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  className="size"
                  src={e}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
