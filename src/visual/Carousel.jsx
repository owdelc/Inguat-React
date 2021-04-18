import React, { Component} from 'react';
import "./general.css";

class Carousel extends Component {
    render(){
        return(


<div id="carousel" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-indicators">
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
  
</div>

<div className="carousel-inner">

    <div className="carousel-item active">
        <img src="https://inguat.gob.gt/templates/yootheme/cache/IMG_3684-b73a8a4c.jpeg" className="d-block w-100" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
        <h1>Bioseguridad Turística</h1>
        <h3>Adquiere la acerditación del sello</h3>
            <button type="button" className="btn btn-light" href="https://inguat.gob.gt/documentos/bioseguridad-turistica">
              VER EL PROCESO</button>
        </div>
    </div>

    <div className="carousel-item">
        <img src="https://scontent.faqb1-1.fna.fbcdn.net/v/t1.6435-9/97425848_2604469262990299_640974571293376512_n.png?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=B0cBxLUZ36sAX-I9rku&_nc_ht=scontent.faqb1-1.fna&oh=d8d1f8a672b023307137fea3a82447eb&oe=609F346E" className="d-block w-100"></img>
        <div className="carousel-caption d-none d-md-block">
        <h1>Actualización de datos</h1>
        <h3>Entidades turísticas</h3>
            <button type="button" className="btn btn-light" href="https://scontent.faqb1-1.fna.fbcdn.net/v/t1.6435-9/159085752_3404740139629870_2047068093190334995_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=5eYWn38iGQsAX-zQhsG&_nc_ht=scontent.faqb1-1.fna&oh=a17016791e7f0a87ff9a6ea848f6a3bc&oe=609BFB4B">
              PRESIONE AQUí</button>
            <div className="bottom-bar"></div>
            
        </div>
    </div>    
    <div className="carousel-item ">
        <img src="https://scontent.faqb1-1.fna.fbcdn.net/v/t1.6435-9/159085752_3404740139629870_2047068093190334995_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=5eYWn38iGQsAX-zQhsG&_nc_ht=scontent.faqb1-1.fna&oh=a17016791e7f0a87ff9a6ea848f6a3bc&oe=609BFB4B" className="d-block w-100"></img>
        <div className="carousel-caption">
        <h1>Necesitas #GUATERAPIA</h1>
        <h3> Pasea por Guatemala </h3>
            <button type="button" className="btn btn-light" href="https://paseoguatemala.com/">VISITA NUESTRA PÁGINA</button>
        </div>
    </div>

    <div className="carousel-item">
        <img src="https://scontent.faqb1-1.fna.fbcdn.net/v/t1.6435-9/78173760_2246759502094612_7619719419911995392_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=0TjQw3iUWvYAX-DQTSB&_nc_ht=scontent.faqb1-1.fna&oh=5c5fcfab4db3c41750b2a5420a6351f6&oe=609ECE0F" className="d-block w-100"></img>
        <div className="carousel-caption d-none d-md-block">
        <h1>Información de Cobros</h1>
        <h3>Establecimientos de Hospedaje</h3>
            <button type="button" className="btn btn-light" href="https://inguat.gob.gt/servicio-cobros/cobros.html">
              INGRESE AQUÍ</button>
            <div className="bottom-bar"></div>
            
        </div>
    </div> 
</div>
</div>
        );
    }
}

export default Carousel;