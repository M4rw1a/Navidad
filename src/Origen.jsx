import "./padre.css"
import navidad from "./assets/navidad.png"
import bolitas from "./assets/bolitas.png"
function Origen() {
    return (
        <div className="padre mx-auto">
            <div className="titulo">
                <img src={navidad} alt="" />
            </div>

            <nav class="navbar navbar-expand-lg bg-light" w-100>
                <div class="container-fluid">
                    <img src={bolitas} width="60" className=" pb-0 ms-0" />
                    <h3>Origen</h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav w-100 ">
                            <li class="nav-item mx-5">
                                <a class="nav-link active" aria-current="page" href="#">Origen</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active" href="#">Tradiciones</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active" href="#">Itinerario Lp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="contenido">
            </div>

            <div className="derecha">

            </div>
            <div className="footer">

            </div>
        </div>
    )
}
export default Origen;