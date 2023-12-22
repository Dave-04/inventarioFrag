import React from "react";
import { useNavigate } from 'react-router-dom';

const ListaOrdenes = ({ nombre, email, producto, cantidad, ci }) => {
    const navigate=useNavigate();
    const name={nombre, email, producto, cantidad, ci};
  return (
    <div className="producto-container">
      <div className="card">
        <h3>{nombre}</h3>
        <p>Producto: {producto}</p>
        <p>Cantidad: {cantidad}</p>
        <button onClick={()=> navigate("/detalleOrdenes/"+name.nombre+"/"+name.ci+"/"+name.producto+"/"+name.cantidad+"/"+name.email+"/")}>Detalle</button>
        <p></p>
      </div>
    </div>
  );
};

export default ListaOrdenes;