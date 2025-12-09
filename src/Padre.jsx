import "./padre.css"
import navidad from "./assets/navidad.png"
import arbolito from "./assets/arbolito.png"
import { Routes, Route, Link } from "react-router-dom"; // Agregué Link
import Tradicion from "./Tradicion.jsx";
import Itinerario from "./Itinerario.jsx";

function Padre() {
    return (
        <div className="padre mx-auto">
            <div className="titulo">
                <img src={navidad} alt="Feliz Navidad" />
            </div>

            <nav className="navbar navbar-expand-lg bg-light w-100">
                <div className="container-fluid">
                    <img src={arbolito} width="60" className="pb-0 ms-0" alt="Árbol de Navidad" />
                    <h3>Principal</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" to="/">Origen</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" to="/tradicion">Tradiciones</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" to="/itinerario">Itinerario Lp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
            <div className="contenido">
                <Routes>
                    <Route path="/" element={
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8 mb-4">
                                <div className="card">
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABAUGAQIDB//EADcQAAEDAgQFAgQFAwQDAAAAAAEAAgMEEQUSEyEGMUFRYSKBMkJxoRQjUpHBsdHwM2Jy8RUWJP/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACMRAAICAQUBAQADAQAAAAAAAAABAhEDBBITITFBFDJRYSL/2gAMAwEAAhEDEQA/APLtPwgxEcxZO6SNJds5olp+EafhO6S2bA55s0XPPYXRYCGn4Rpn6J3SRpIAS0/CNPwndJGkgBLT8LpDTue70tv6XHbw0n+E0Ih+kH63U3wzNFSVUj30MM4MMgyvL7fCf91vt1UZS2qycFbplXdEWkXFisaalaxjTO8thY0FxIALj/VxS+l4TTtEX6JafhGn4TukgReExCWn4RpbA7X7dQntJY0h2QAlp+EafhO6SNJACWn4Rp+E7pI0kAO6SNJN5EZErEKaSNJN5PCzk8IsBPSRpJvJ4Rk8IsBTSWRFdNZPC3ZHc8kmxoTbBmcGgc1YsGw8NDjboVxpaQfER9lY8PhDIuXNZc+TqkasOPuypYpQZZHEDkVGCHwrniVODIdtioKopcjiQNlPFktURyY+7IkxeEOYHOJDQ0HoOQTjmC61yeFemZmKaaNNN5PCzkHZOwE9NGkm8nhGTwiwFNNGmm8nhGTwiwGciC0m1+nhM5B2RkHZRELZEZEzkHZAjCBi2RZcxu2XNy3v3TJj8LAYOyAFsi608XrBPddxEuzI8trhRk+icYuxuBmwspeMtYyxIFhcqNo2lwu0C45XNlFYrJUw1BjnkBIFwGHay5Wqzcfw7Glw8v0nqwtfbKQfooyqjBYUnhLmSVFpJ3Rl3wgH4j2UjUi1wp6TLyxsjrMPF0Qb47OKxkUg+K65GMBdJM5DQpkRkTOmD0WdKydkRTIs5EzphGQdkxC2RGRMGNbOY0n0ggdkAMaay5jXOuxpaOxN13yIyKreizjkL6ayI13yrIZunvQLHI5iK4WhisU6xl1l8Shyot4ZNCzYvTdEj4o23llYyw3zOAso3G8YZSQFtHVU+uObSC8/bYe6pc081XUF9XIZH8szgAs2bVxh0jdg0TnW7pF6i4hhbnjo26jwbahPp9rHdITRzyQSVrzdgcAXONy5yi8IhaJovxDnxQvO0mS42O6uXEEFPHgEYpMpgEgIIN7357rkZZSzScpPw7OKEcCUIr0gqmmfT2Dz+W9odG8cnDuo449W0lQGyv14R8rrX/fmrkYqSXhmnfWvYwiACN7hu11rbfsvO64O1ibGx5HulC8M7gxyUc8KmvC60FdT18d4pGanWPOC4ey7SxWXndPM+CoE0RaHsNwXMDrH3Cn6HiuXZlbAJXE7yNdl2+lv5XWxaxPqRx9RoX7DwsbIblD2WTNJJDUUzJoHte1w5tcDY9tkPYtUcsX4c+WCUVTE8iNNMZEFljbn5U+RFXGxfTRppjIjIjeg45DGRGRM5EZFyuc7f5v8FsiyGbpjIFDY1xBR4YHwxubNWN5Rt3A/5Hp/myOcPzEs2zGlzr5QLmwvt7KsYxxHLLeHDhJBY+qVws4+xGyr+I4xW4nUZ5HmFoGURwuc1vPrut6KComjlljie6OJuaR1uQ6FZs2aT8Nun08V/IVljfLPnnlJL/ifK4291J0MGC00sdTWVrp5InXEcULsh7XuBdN4Tg78WqBEwFsYvnly3De3upiroMKpQzDqOgbX14bbfp5eRt7f0VEMn1l+WKrajVmMYGaOOkZSyup2j0tyj0/Q35pSeW0L4aaSU0zyDlktz/v9FKYJwlFB68RcJZeelHswfyVYv/B4cWD/AONlvqVXlcpO7IwcYIpMUsRaw1xmlijFmsaQNu2/L2Wa7GMFqIo2VGGyBkVwy2UZb+6ukmCYdp2/Bx291VcZwYYZVisgo46qhP8ArQvFyzyPCeJyh9CbUkVCSnom050at5lzGwkiIu3puOq5QU9hmdsrjUcMUtdB+PweUCAsLhCQTuL3A7Hwq/JGWNy5bHlblYpzyf0W44quzWDFqujkYPxlQIQfU1tn38WdsrpRVLa+ITRxyMaf1gAnyvPq+nnp5TFUROjeLGzhvvyS1NJLTSh8L5G775JHMv7tN1pw5XBdmbU4Vk7R6hkWMiV4fxWHF6b0emdmz4i65HnluFJ6fdaOcw/lFsiMiZyIyJ84fmGciMi31Y+6jqziHDKO4fPncPkj9Rv7bLjLLJ+HflhjH0jeLsUqsNhjZQy07ZpPldd0pH+1trW63K8/MklQ8umkLiSS7ye+yuU+P4VUOqmvw2YNqm5ZZmyDULeVvAt0BUnho4eqauCppsofAwMggecojtvcN6nzur+VRj2jMsW6fTRAYFwpLiMGvOXQxZw0NIsXAH1H7WHlWjiCmhoOHqplPGGNeWg/uAPsLeymI5YmgNaA0DkAOSg+Ma2J1HDTNcC90mZzb7gAf3Kz8zbNMsW1WxThuir6ym0KYupaAm8kvzymwBsfb/tXGiwmnoYSykiDB8xPN31KheGsUp6bCYYXMkc9pd8IHf6pzFccDsOlihikY94DQ4kbA8+Xi6oeW5Uitx+ksaXLJeybbT3ZyUFw9XNosJbFMyWUlxc0tIIAPTf3UvDjsL47sppr9Q4gKL1C+si4TrqJ1kp/SFSsUxatw7iMwSBho7NOQN3LSOd+91a63iCJjWMZSSOlebNaXAD3O/8ARVzieuNboDTMQa0ktNib9N7cualHMn59Fsl9Q1NhktADXYFkcyQZn01/RIO7exVG4hnZV1z6ljJYp3G8sMg3Y4ADY9lbuHMWbSQy01QyR7Qc8eW3p7jn9ElxfWUVZTxvjp3Nma/d7mgXFjtcFSjkqVMmokw+ipa+GGWohZLeP0kjo4bj9iqBjHDNbRPmdDEZadsgawjd2V3I/wAFWvDeJKGHDKaKYS544wx1m3G2y7f+0YU4+qV7b880Z/srY5ZJ+E+NV6ea0U09LI2ZlNn/ADMgLmuFn9g4EEH39l6Jw9ihxalkdJCIJ4nZXw5rub5IIBC1mr+HhHUzOdC78QAJWDcyW5envvzVbxfiKorXZKa9PABlFj+Y4eXc/ZaOXcukZ3j2O27L3k3sjJ0XnNJjWJUTcsFW/KTfK+zx91IwcXYkxw1WwSjrdmUn3H9lC5ElLG/SGqKyqqP9eokffmC7ZcANkIQUtt+mbLdjblaArcEpMlGiRgraxjMjKmQM7ZklUSPNSBmvYblYa4hRjql755HtPN2yIY222WzzqMUi68PykxvB3s7kputyPZEHC17lVHhqab8x21rgWv8AVS+JVU7HU7WgH0kn6LFPE+fotjJPFuLRgsbdIwk+rNceVMRYecxAHMdlDcJzCSmfLUtYDG/4ieQ2V0psToQGBuV+a93DosOaEuRpIjkzziltVleraB7Y3PaPWyxbfoVA4lh8kTRLUvDnvPq8K+YnV0UkEjYZGOflPp5X+ndUvjCokjpGFjRcv/hPA57lGghllkjckQtO9rajK0fKVD8RSOuxububLWnrZ/x0QLQASR9lHcRTObO0b53C5F+X+brpQwvmRF5UsbZikOaFwJ+Fx/Yoe0JDD53mV7CfiF00XFXyg1ISyqUTV4XNbuN1oeaaKpAshYQmRNNWP9X2WwcD8wSSyFdxlW8cD23+ILOtGPmv9EktwWjmQPqlxokpneepDYXll81rN26qOhY4iwXSplb6WtN97rRkpGwVkY7V0QlK2WfhyLIXPfIwA7WvvsnquZstY7e+UBoVWp5XEjeykG1YiG257rLLF/25GiOWobS+cN1UQgqYZHhua1k42U0zhnqA5pHpyN/rc/decsrpM1mvIB52UpBWyiMkyv3FufRUywNScr9LoZ1VF4fKaYOnfKHgxnYdDboVFcSYgJ4omg+VXZq+bQytleBaxaHbKInrpXP/ADJHPN9iTyShp7luY8maNUkPySsbMx5aPS4FJ442KaUStJuRY79ku6sD7hyRqH3vY7LXHHUrMzmnGjnF+VUNeDfdPGYjm0exUQ57gnmPzMDu4Vso36VwkMazOtwsGRn6kuVr7KOxA5sa1GfqCNRv6h+6U9lhHGhbxQzyHr9lqZHu5uK0QtNGa2CyCsIQBstmmy0CzdIkmdxMWjZDZzfmuCAlSHuJGnk3G6k2zWi5qFhNrJzU9Kpmuy2DHhPcWJUdVu3K3EiXnN0oqmOTsXfKT1Wuqeq0fs5a3V9FFtHRxutLkdSsXQmF2ZD3A7OP7rfXk/V9lyQnQrOmvJ+r7LInkHzfZckJUK2CEITAEIQgDIQhCABZbzQhIaO7Oi75isIVb9LV4bXXJ5QhIbF5VzQhWopYIQhMQIQhAAhCECP/2Q=="
                                        className="card-img-top"
                                        alt="Origen Cristiano de la Navidad"
                                        style={{ height: '150px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Origen Cristiano</h5>
                                        <p className="card-text">La Navidad cristiana celebra el nacimiento de Jesucristo, considerado el Hijo de Dios. Es una fiesta de alegría, fe y encuentro familiar que recuerda el mensaje de amor, paz y esperanza del cristianismo.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-8 mb-4">
                                <div className="card">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        className="card-img-top"
                                        alt="Origen Pagano de la Navidad"
                                        style={{ height: '150px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Origen Pagano</h5>
                                        <p className="card-text">Tiene su origen en antiguas festividades precristianas, como los solsticios de invierno y celebraciones de la renovación del sol, donde se realizaban rituales, fiestas y sacrificios para marcar el cambio de estación y pedir fertilidad y prosperidad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } />

                    <Route path="/tradicion" element={<Tradicion />} />

                    <Route path="/itinerario" element={<Itinerario />} />
                </Routes>
            </div>
            <div className="derecha">
                <div className="redes-sociales">
                    <h4>Redes Sociales</h4>

                    <div className="botones-redes">
                        <a href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-redes facebook">
                            <span>Facebook</span>
                        </a>

                        <a href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-redes instagram">
                            <span>Instagram</span>
                        </a>

                        <a href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-redes twitter">
                            <span>Twitter</span>
                        </a>

                        <a href="https://pinterest.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-redes pinterest">
                            <span>Pinterest</span>
                        </a>

                        <a href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-redes youtube">
                            <span>YouTube</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>©2025 Navidad -Maria de los Angeles Alvarado Avila</p>
            </div>
        </div>
    )
}

export default Padre;