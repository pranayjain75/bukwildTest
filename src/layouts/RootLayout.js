import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import MarqueeComponent from "../components/MarqueeComponent";
import PageMenuComponent from "../components/PageMenuComponent";

const RootLayout = ({ pageContent }) => {
  const [currentPage, setCurrentPage] = useState("Industries");

  return (
    <>
      <HeaderComponent />
      <PageMenuComponent
        pageContent={pageContent}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MarqueeComponent pageContent={pageContent} currentPage={currentPage} />
    </>
  );
};

export default RootLayout;
