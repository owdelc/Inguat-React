import React, { Component } from 'react';
import './App.css';
import Navbar from "./visual/Navbar.jsx";
import Carousel from "./visual/Carousel.jsx";
import Texto1 from "./visual/Texto1.jsx";
import Noticias from "./visual/Noticias.jsx";
import Informacion from "./visual/Informacion.jsx";
import Informacion2 from "./visual/Informacion2.jsx";
import VideosD from "./visual/VideosD.jsx";
import VerMas from "./visual/VerMas.jsx";
import Footer1 from "./visual/Footer1.jsx"

class App extends Component {

  render(){
    return (
      
      <div className="App">

        <div className="navbar">
          <Navbar></Navbar>
        </div>

        <div className="carousel">
          <Carousel></Carousel>
        </div>

        <div className="texto">
          <Texto1></Texto1>
        </div>

        <div className="noticias">
          <Noticias></Noticias>
        </div>

        <div className="informacion1">
          <Informacion></Informacion>
        </div>

        <div className="Informacion2">
          <Informacion2></Informacion2>
        </div>

        <div className="videos">
          <VideosD></VideosD>
        </div>

        <div className="vermasvideos">
          <VerMas></VerMas>
        </div>

        <div className="pie de pagina">
          <Footer1></Footer1>
        </div>

      </div>

    );
  }

}

export default App;
