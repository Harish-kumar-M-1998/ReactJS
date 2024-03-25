import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <><div className="fixed-top">
      <Navbar/>
      <Header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss">
      <Card  />
      </div>
      <Footer/>
    </>
  );
}

export default App;