import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import Search from "./Search";
import Logo from "./images/logo.jpg"


const Header = () => {
    return(
        <div className="container-fluid">
            <div className="row p-2 align-items-center text-center">
                <div className="col-md-4" width={100}>
                    <Search />
                </div>
                <div className="col-md-4">
                   <a href="./index.html"><img src={Logo} alt="Logo" width={150}/></a> 
                </div>
                <div className="col-md-4">
                    <a href="#" className="text-dark text-decoration-none fs-5 text me-3">CREAR CUENTA</a> | <a href="#" className="text-dark text-decoration-none fs-5 text ms-3">INICIAR SESIÓN</a> 
                </div>
            </div>
            <div className="row align-items-center p-3" id="barra">
                    <div className="col-md-12">
                        <NavBar />
                    </div> 
            </div>
        </div>
        
    )
}

export default Header;