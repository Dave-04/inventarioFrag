import React from "react";
import NavBar from "../components/navbar";
import ListaOrdenes from "../components/listaOrdenes";
import "../styles/productos.css";

const Ordenes = () => {
  
  const ordenes = [
    {
      nombre: "David Posso",
      email: "cdp@hotmail.es",
      producto: "Blue",
      cantidad: 1,
      ci: "1715709415",
    },
    {
      nombre: "Carolina Sanchez",
      email: "cs@hotmail.es",
      producto: "Chanel",
      cantidad: 2,
      ci: "1815709415",
    },
    {
      nombre: "Karina sanchez",
      email: "ksp@hotmail.es",
      producto: "serum",
      cantidad: 1,
      ci: "1915709415",
    },
    {
      nombre: "Andrea Sanchez",
      email: "asp@hotmail.es",
      producto: "Chanel",
      cantidad: 1,
      ci: "1615709415",
    },
    {
      nombre: "Alex Posso",
      email: "app@hotmail.es",
      producto: "Chanel",
      cantidad: 5,
      ci: "1515709415",
    },
    {
      nombre: "Carlos Posso",
      email: "cpp@hotmail.es",
      producto: "La Prairie",
      cantidad: 1,
      ci: "1415709415",
    },
    {
      nombre: "Amparo Jacome",
      email: "ajp@hotmail.es",
      producto: "La Prairie",
      cantidad: 1,
      ci: "1315709415",
    },
    {
      nombre: "Martin Posso",
      email: "mpp@hotmail.es",
      producto: "La Prairie",
      cantidad: 2,
      ci: "1215709415",
    },
    {
      nombre: "Vale Posso",
      email: "vpp@hotmail.es",
      producto: "Hugo Boss",
      cantidad: 1,
      ci: "1115709415",
    },
    {
      nombre: "Valeria Moreno",
      email: "vmp@hotmail.es",
      producto: "Versace",
      cantidad: 2,
      ci: "1015709415",
    },
  ];
  return (
    <div>
      <NavBar />
      <h2>Lista de Ordenes</h2>
      <div className="card-container">
        {ordenes.map((ordenes, index) => (
          <ListaOrdenes 
          key={index}
          nombre={ordenes.nombre}
          email={ordenes.email}
          producto={ordenes.producto}
          cantidad={ordenes.cantidad}
          ci={ordenes.ci}
          />
        ))}
      </div>
    </div>
  );
};

export default Ordenes;