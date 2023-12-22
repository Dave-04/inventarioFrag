import React from "react";
import NavBar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

const detalleProveedores = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { nombre,ruc,telefono,email,categoria } = useParams();
  return (
    <div>
      <NavBar />
      <h4>Detalle de Proveedor</h4>

      <div className="detalle-container">
        <div className="card">
          <h3>{nombre}</h3>
          <p>Categoria: {categoria}</p>
          <p>Telefono: {telefono}</p>
          <p>Email: {email}</p>
          <p>RUC Proveedor: {ruc}</p>
          <button onClick={() => navigate("/proveedor/")}>Regresar</button>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default detalleProveedores;
