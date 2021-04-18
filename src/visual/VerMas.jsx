import React, { Component} from 'react';
import "./general.css";

class VerMas extends Component {
    render(){
        return(
            <div class="row bg-azul2">
            <div class="card-transparent col p-5 ml-5 mt-4">
            <h1 class="text-orange1 text-nowrap">Ver más videos en nuestro canal oficial</h1>
            </div>
            <div class="card-transparent col p-5 ml-5 mt-4">
            <a href="https://www.youtube.com/user/tvinguat/videos" class="ml-5 mt-5">
            <button class="text-dark btn btn-light btn-lg mt-1">VER MAS</button>
            </a>
            </div>
            </div>
            );
    }
}

export default VerMas;