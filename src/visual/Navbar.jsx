import React, { Component} from 'react';
import "./general.css";

class Navbar extends Component {
    render(){
        return(
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-azul">
        <div class="container-fluid">
      <a class="navbar-brand" href="https://inguat.gob.gt/">
      <img class="d-inline-block img-fluid mb-0 h1" href="https://inguat.gob.gt/templates/yootheme/cache/logo-blanco-inguat-55767f6b.png" alt="INGUAT" height="90" width="135"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-5" id="navbarSupportedContent" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            INGUAT
          </a>
          <ul class="dropdown-menu dropdown-menu-black" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://inguat.gob.gt/inguat-guatemala/que-es-inguat">Qué es INGUAT</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/inguat-guatemala/ley-organica-del-inguat-documento">Ley Orgánica del INGUAT</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/inguat-guatemala/funciones-o-atribuciones">Reglamento orgánico interno</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/inguat-guatemala/historia">Historia</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/inguat-guatemala/autoridades">Autoridades</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/inguat-guatemala/estructura-organica-funcional">Estructura orgánica funcional</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/inguat-guatemala/oficinas-regionales-y-delegaciones-de-informacion">Oficinas regionales y subregionales</a></li>

          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión Turística
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://inguat.gob.gt/gestion-turistica/descripcion-del-sector">Descripción del sector</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/gestion-turistica/planes-y-politicas-de-desarrollo-turistico">Planes y políticas de desarrollo turístico</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/gestion-turistica/planes-de-segmentos-turisticos-inguat">Planes de segmentos turísticos</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/gestion-turistica/planes-de-desarrollo-turistico">Planes territoriales de desarrollo turístico</a></li>
            <li><a class="dropdown-item" href="#">Programas</a></li>
            <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/gestion-turistica/programas/programa-impulsa">Programa Impulsa</a></li>
            <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/gestion-turistica/programas/programa-pueblos-pintorescos">Programa Pueblos Pintorescos</a></li>
            <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/gestion-turistica/programas/programa-turismo-para-todos">Programa Turismo para Todos</a></li>
            <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/gestion-turistica/programas/programa-arte-y-turismo-un-pais-con-mas-color">Programa Arte y Turismo, un país con más color</a></li>
            <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/gestion-turistica/programas/destino-turistico-seguro">Destino Turístico seguro</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/gestion-turistica/mecanismo-de-coordinacion">Mecanismos de coordinación interinstitucionl</a></li>
            <li><a class="dropdown-item" href="https://inguat.gob.gt/gestion-turistica/indicador-de-competitividad-y-sostinibilidad-turistica">Indicador de competitividad y sostenibilidad turística</a></li>
          </ul>
        </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Al turista</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/al-turista/asistencia-turistica">Asistencia turística</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/al-turista/custodias">Acompañamiento a grupos</a></li>
              <li><a class="dropdown-item ml-1" href="#">Información Turistica</a></li>
              <li><a class="dropdown-item ml-2" href="https://inguat.gob.gt/servicios/al-turista/informacion-turistica-inguat/oficinas-de-informacion-turistica">Oficinas de Información Turística</a></li>
              <li><a class="dropdown-item ml-1" href="https://www.geovisitguatemala.com/">Planificación de viaje</a></li>
              <li><a class="dropdown-item ml-1" href="https://paseoguatemala.com/">Paseo Guatemala</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/al-turista/directorio-de-servicios-registrados">Prestadores de servicios registrados</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/al-turista/lugares-administrados-por-inguat">Atractivos administrados por INGUAT</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/al-turista/guia-turistica-para-ninos">Guía Turística para niños</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">A prestadores de servicios turísticos</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/a-prestadores-de-servicios-turisticos/ferias">Ferias Internacionales</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/a-prestadores-de-servicios-turisticos/ferias-nacionales">Ferias Nacionales</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/a-prestadores-de-servicios-turisticos/caravanas">Caravanas Internacionales</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/a-prestadores-de-servicios-turisticos/caravanas-nacionales">Caravanas Nacionales</a></li>
              <li><a class="dropdown-item ml-1" href="http://selloq.inguat.gob.gt/index.php/es/">Distintivos de calidad y sostenibilidad turística</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/a-prestadores-de-servicios-turisticos/formacion-turistica">Formación turística</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Otros servicio</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/otros-servicios/familia-y-prensa">Giras de fam y press</a></li>
              <li><a class="dropdown-item ml-1" href="https://inguat.gob.gt/servicios/otros-servicios/espectaculos2">Espectáculos</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Prensa
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="https://inguat.gob.gt/prensa/informe-de-gobierno">Informe de Gobierno</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/prensa/noticias-recientes">Noticias</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/prensa/comunicados">Comunicados</a></li>
              <li><a class="dropdown-item" href="https://www.youtube.com/user/tvinguat/videos">Videos Destacados</a></li>
              <li><a class="dropdown-item" href="https://issuu.com/inguatboletin">Boletines</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/prensa/fotografias">Fotografías</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/prensa/noticias-coronavirus">Noticias Coronavirus</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Documentos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="https://inguat.gob.gt/documentos/biblioteca-de-documentos">Biblioteca de documentos</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/documentos/comites-de-autogestion-turistica">Comités de Autogestión Turística</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/documentos/bioseguridad-turistica">Bioseguridad Turística</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/documentos/guias-de-buenas-practicas-sanitarias-para-el-sector-turistico">Guías d Buenas Prácticas Sanitarias para el Sector Turístico</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/documentos/autoevaluaciones">Autoevaluaciones</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/documentos/formularios-varios">Formularios varios</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/documentos/documentos-inguat-guatemala">Mapas</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Información estadítica
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="https://inguat.gob.gt/informacion-estadistica/estadisticas">Estadísticas</a></li>
              <li><a class="dropdown-item" href="https://inguat.gob.gt/informacion-estadistica/observatorio-de-turismo-sostenible-de-antigua-guatemala">Observatorio de Turismo Sostenible de Antigua Guatemala</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://uip.inguat.gob.gt/" tabindex="-1" aria-disabled="true">Información pública</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://inguat.gob.gt/contactos-inguat-guatemala-guate" tabindex="-1" aria-disabled="true">Contactenos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/inguat/"
            tabindex="-1" aria-disabled="true">
            <img src="https://inguat.gob.gt/images/redes-iconos/facebook-icono.png" width="25" height="25"/>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/InguatPrensa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            tabindex="-1" aria-disabled="true">
            <img src="https://inguat.gob.gt/images/redes-iconos/logo-twitter.png" width="25" height="25"/>
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/inguat.gob/?hl=es-la"
          tabindex="-1" aria-disabled="true">
          <img src="https://inguat.gob.gt/images/redes-iconos/instagram-logo.png" width="25" height="25"/>
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.youtube.com/channel/UCszGis-1s0tHGghzD6mZPsw"
            tabindex="-1" aria-disabled="true">
            <img src="https://inguat.gob.gt/images/redes-iconos/youtube-logo.png" class="img-fluid" alt="YT" width="25" height="25"/>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://api.whatsapp.com/send?phone=50251881819"
            tabindex="-1" aria-disabled="true">
            <img src="https://inguat.gob.gt/images/icono-watsapp-blanco.png" width="25" height="25"/>
            </a>
          </li>

        </ul>

      </div>
    </div>
  </nav>
            </div>
        );
    }
}

export default Navbar;