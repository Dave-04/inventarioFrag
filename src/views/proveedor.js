import React from "react";
import NavBar from "../components/navbar";
import ListaProveedor from "../components/listaProveedores";
import "../styles/productos.css";

const Proveedor = () => {
  
  const proveedor = [
    {
      nombre: "Chanel",
      categoria: "perfume, mauillaje",
      telefono: "0960138950",
      email: "ventas@chanel.net",
      ruc: "1715709415001",
    },
    {
      nombre: "Hugo Boss",
      categoria: "perfume",
      telefono: "0990138950",
      email: "ventas@hugoboss.net",
      ruc: "1815709415001",
    },
    {
      nombre: "La Prairie",
      categoria: "tratamiento",
      telefono: "0980138950",
      email: "ventas@laprairie.net",
      ruc: "1915709415001",
    },
    {
      nombre: "Versace",
      categoria: "perfume",
      telefono: "0970138950",
      email: "ventas@versace.net",
      ruc: "1615709415001",
    }
  ];
  return (
    <div>
      <NavBar />
      <h2>Lista de Proveedor</h2>
      <div className="card-container">
        {proveedor.map((proveedor, index) => (
          <ListaProveedor 
          key={index}
          nombre={proveedor.nombre}
          categoria={proveedor.categoria}
          telefono={proveedor.telefono}
          email={proveedor.email}
          ruc={proveedor.ruc}
          />
        ))}
      </div>
    </div>
  );
};

export default Proveedor;