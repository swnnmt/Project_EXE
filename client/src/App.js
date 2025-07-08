import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home"; // màn hình Home chính của bạn
import Tours from "./screens/tour";
import Contact from "./screens/contact";
import Service from "./screens/service";
import FooterHome from "./components/FooterHome";
import HeaderHome from "./components/HeaderHome";
import Destinations from "./screens/destinations";
import AboutPage from "./screens/about";
export default function App() {
  const tours = [
    {
      tourId: "1",
      title: "Hạ Long",
      time: "3 ngày 2 đêm",
      domain: "b", // b: Bắc, t: Trung, n: Nam
      images: ["halong.jpg"],
    },
    {
      tourId: "2",
      title: "Đà Nẵng",
      time: "2 ngày 1 đêm",
      domain: "t",
      images: ["danang.jpg"],
    },
    {
      tourId: "3",
      title: "Phú Quốc",
      time: "4 ngày 3 đêm",
      domain: "n",
      images: ["phuquoc.jpg"],
    },
  ];

  return (
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Bạn có thể thêm các route khác ở đây */}
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/destinations" element={<Destinations tours={tours} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <FooterHome />
    </BrowserRouter>
  );
}
