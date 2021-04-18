import React, { Component} from 'react';
import "./general.css";

class VideosD extends Component {
    render(){
        return(
            
        <div class="row bg-gray1 9t-5 ">
            <div class="bg-gray1 mb-n2 mt-5">
            <h1 class="text-center text-azul3">Videos destacados de INGUAT</h1>
            </div>
        <div class="card-transparent col  ml-5 mt-5">
        <iframe width="460" height="315" src="https://www.youtube.com/embed/oOYGnsLald4"
        title="YouTube video player"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
        </div>
      
      
        <div class="card-transparent col ml-3 mt-5">
        <iframe width="460" height="315" src="https://www.youtube.com/embed/c5DpLt0NQM4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen class="ml-n3"></iframe>
        </div>
      
      
        <div class="card-transparent col ml-5 mt-5">
        <iframe width="460" height="315" src="https://www.youtube.com/embed/1-eA50n8RRg" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen class="ml-n5"></iframe>
        </div>
        </div>
    
            
          
          
          
            )
    }
}

export default VideosD;