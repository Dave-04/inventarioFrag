import React from "react";
import { useNavigate } from 'react-router-dom';

const ListaProductos = ({ nombre, categoria, fabricante, stock, id }) => {
    const navigate=useNavigate();
    const name={nombre, categoria, fabricante, stock, id};
  return (
    <div className="producto-container">
      <div className="card">
        <h3>{nombre}</h3>
        <p>Categoria: {categoria}</p>
        <p>Fabricante: {fabricante}</p>
        <button onClick={()=> navigate("/detalleProductos/"+name.nombre+"/"+name.id+"/"+name.fabricante+"/"+name.stock+"/"+name.categoria+"/")}>Detalle</button>
        <p></p>
      </div>
    </div>
  );
};

export default ListaProductos;
