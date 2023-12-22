import React from "react";
import NavBar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

const detalleOrdenes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { nombre,ci,producto,cantidad,email } = useParams();
  return (
    <div>
      <NavBar />
      <h4>Detalle de Ordenes</h4>

      <div className="detalle-container">
        <div className="card">
          <h3>{nombre}</h3>
          <p>Producto: {producto}</p>
          <p>Cantida: {cantidad}</p>
          <p>Email: {email}</p>
          <p>CI Cliente: {ci}</p>
          <button onClick={() => navigate("/ordenes/")}>Regresar</button>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default detalleOrdenes;