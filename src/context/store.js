"use client";
import { createContext } from "react";

const Contex = createContext(null);

const Provider = ({ children }) => {
  const dummyapi = {
    nav: {
      logo: "/nav/navbar-brand.png",
      nav: "/nav/Vector.png",
      clouse: "/nav/Close-Square.png",
    },
    home: { event: "/home/logo-event.png", btntext: "Tentang Acara" },
    foot: { logo: "/foot/Maskgroup.png", btntext: "Tentang Acara" },
    artikel: [
      {
        img: "/artikel/1.png",
        judul:
          "Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya",
        tanggal: "Sabtu, 25 Nov 2023 20:00 WIB",
      },
      {
        img: "/artikel/2.png",
        judul:
          "Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature",
        tanggal: "Selasa, 28 Nov 2023 07:42 WIB",
      },
      {
        img: "/artikel/3.png",
        judul: "Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023",
        tanggal: "Minggu, 26 Nov 2023 13:04 WIB",
      },
      {
        img: "/artikel/4.png",
        judul:
          "Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials",
        tanggal: "Sabtu, 18 Nov 2023 17:39 WIB",
      },
      {
        img: "/artikel/5.png",
        judul: "CT Arsa Charity Fun Run 2023 Bertabur Emas",
        tanggal: "Kamis, 16 Nov 2023 16:34 WIB",
      },
      {
        img: "/artikel/6.png",
        judul:
          "BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta",
        tanggal: "Minggu, 12 Nov 2023 11:55 WIB",
      },
    ],
    galeri: [
      "/galeri/1.png",
      "/galeri/2.png",
      "/galeri/3.png",
      "/galeri/4.png",
    ],
    seponsor: [
      "/seponsor/1.png",
      "/seponsor/2.png",
      "/seponsor/3.png",
      "/seponsor/4.png",
      "/seponsor/5.png",
      "/seponsor/6.png",
      "/seponsor/7.png",
      "/seponsor/8.png",
    ],
  };
  const handlegoto = (e) => {
    const Link = e;
    window.location.href = Link;
  };
  return (
    <Contex.Provider
      value={{
        dummyapi,
        handlegoto,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
