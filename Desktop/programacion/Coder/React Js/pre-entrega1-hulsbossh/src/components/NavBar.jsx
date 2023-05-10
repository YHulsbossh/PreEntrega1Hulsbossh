import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
      <div className="container-fluid ">
        <div className="row bg-danger-subtle fs-4 text">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active text-dark" aria-current="page" href="#">INICIO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">PRODUCTOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">COMO COMPRAR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">BLOG</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">CONTACTO</a>
                </li>
                <li className="nav-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
      </div>
    )
}

export default NavBar;