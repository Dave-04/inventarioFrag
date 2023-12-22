import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link className="link-styles" to="/"><h3 >Inventario Fragancias</h3></Link>
        </li>
        <li>
          <Link className="link-styles" to="/productos"><p>Productos</p></Link>
        </li>
        <li>
          <Link className="link-styles" to="/ordenes"><p>Ordenes</p></Link>
        </li>
        <li>
          <Link className="link-styles" to="/proveedor"><p>Proveedores</p></Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
