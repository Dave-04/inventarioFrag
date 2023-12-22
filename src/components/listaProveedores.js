import React from "react";
import { useNavigate } from 'react-router-dom';

const ListaProveedor = ({ nombre, categoria, telefono, email, ruc }) => {
    const navigate=useNavigate();
    const name={nombre, categoria, telefono, email, ruc};
  return (
    <div className="producto-container">
      <div className="card">
        <h3>{nombre}</h3>
        <p>Categoria: {categoria}</p>
        <p>Email: {email}</p>
        <button onClick={()=> navigate("/detalleProveedores/"+name.nombre+"/"+name.ruc+"/"+name.telefono+"/"+name.email+"/"+name.categoria+"/")}>Detalle</button>
        <p></p>
      </div>
    </div>
  );
};

export default ListaProveedor;