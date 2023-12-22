import React from "react";
import NavBar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

const detalleProductos = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { nombre,id,fabricante,stock,categoria } = useParams();
  return (
    <div>
      <NavBar />
      <h4>Detalle de Productos</h4>

      <div className="detalle-container">
        <div className="card">
          <h3>{nombre}</h3>
          <p>Categoria: {categoria}</p>
          <p>Fabricante: {fabricante}</p>
          <p>Stock: {stock}</p>
          <p>ID Producto: {id}</p>
          <button onClick={() => navigate("/productos/")}>Regresar</button>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default detalleProductos;
