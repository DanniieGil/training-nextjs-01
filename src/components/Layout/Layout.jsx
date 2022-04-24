import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { container, minHeight } from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Navbar />
      <div className={minHeight}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
