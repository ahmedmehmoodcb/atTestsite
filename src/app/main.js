"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsApp from "@/components/whatsapp";
import { usePathname } from "next/navigation";
import React from "react";

const main = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      <Header />
      {data}
      <Footer />
      <WhatsApp />
    </>
  );
};

export default main;
