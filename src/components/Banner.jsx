import { Link } from "react-router-dom";
import bannerNewBorn from "../assets/images/bannerNewBorn.jpg"
import bannerNinia from "../assets/images/bannerNinia.jpg";
import bannerNinio from "../assets/images/bannerNinio.jpg";
import bannerAccesorios from "../assets/images/bannerAccesorios.jpg";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerNewBorn})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: 320 }}>
                    <Link to={"/category/newborn"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Recién Nacido</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerNinia})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: 320 }}>
                    <Link to={"/category/niña"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Niña</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerNinio})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: 320 }}>
                    <Link to={"/category/niño"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Niño</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerAccesorios})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9, height: 320 }}>
                    <Link to={"/category/accesorios"} className="text-decoration-none">
                        <span className="bg-white text-uppercase px-3 py-2" style={{ color: "#D96704" }}>Accesorios</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;