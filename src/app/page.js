"use client";
import { useEffect } from "react";
import Homes from "@/components/Molecules/home";
import Artikel from "@/components/Molecules/artikel";
import Galeri from "@/components/Molecules/galeri";
import Sponsor from "@/components/Molecules/seponsor";
import Events from "@/components/Molecules/event";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className="m-auto">
      <Homes></Homes>
      <Events></Events>
      <Sponsor></Sponsor>
      <Galeri className={"mt-6"}></Galeri>
      <Artikel></Artikel>
    </main>
  );
}
