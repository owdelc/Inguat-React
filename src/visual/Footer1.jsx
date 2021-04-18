import React, { Component} from 'react';
import "./general.css";

class Footer1 extends Component {
    render(){
        return(
<div class="row bg-foot">
<div class="card-transparent col mt-3 p-5">
<h3 class="text-white text-nowrap ml-5">Teléfono</h3>
<div class="mt-3 ml-5">
<a class="btn btn-transparent text-white p-2" href="tel:713-992-0916">
Llamar/Call INGUAT <span class="glyphicon glyphicon-earphone"> </span>  PBX: (502) 2290 - 2800
</a>
</div>
</div>
<div class="card-transparent col mt-3 p-5">
<h3 class="text-white text-nowrap">Dirección</h3>
<h5 class="text-white mt-4">7 ma. Avenida 1 - 17 Zona 4, Centro Cívico</h5>
</div>
<div class="card-transparent col mt-3 p-5">
<h3 class="text-white text-nowrap">Correo</h3>
<a href="mailto:info@inguat.gob.gt"><h5 class="text-white mt-4">info@inguat.gob.gt</h5></a>
</div>
<div class="card-transparent col p-5 mt-3 ">
<a href="tel:1500"><h3 class="text-white text-nowrap">Asistencia</h3>
<img src="https://inguat.gob.gt/images/15-00-guatemala.png"/>
<img src="https://inguat.gob.gt/images/t-asistencia-t.png" class="mt-2"/></a>

</div>

<div class="card-white col mt-3 p-5 " width="200">
<div class="">
<div class="">
<h3 class="text-white text-nowrap">Siguenos</h3>
<ul class="text-light">
<li>
<a href="https://www.geovisitguatemala.com/">
<h5 class="text-light">GeoVisit Guatemala</h5>
</a>
</li>
<li>
<a href="https://www.facebook.com/inguat/">
<h5 class="text-light">Facebook</h5>
</a>
</li>
<li>
<a href="https://twitter.com/InguatPrensa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
<h5 class="text-light">Twitter</h5>
</a>
</li>
<li>
<a href="https://www.instagram.com/inguat.gob/?hl=es-la">
<h5 class="text-light">Instagram</h5>
</a>
</li>
<li>
<a href="https://www.youtube.com/channel/UCszGis-1s0tHGghzD6mZPsw">
<h5 class="text-light">YouTube</h5>
</a>
</li>
<li>
<a href="https://visitguatemala.com/">
<h5 class="text-light">Visit Guatemala</h5>
</a>
</li>
<li>
<a href="https://api.whatsapp.com/send?phone=50251881819">
<h5 class="text-light">whatsapp</h5>
</a>
</li>
</ul>
</div>
</div>
</div>

</div>



            );
    }
}

export default Footer1;