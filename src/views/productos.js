import React from "react";
import NavBar from "../components/navbar";
import ListaProductos from "../components/listaProductos";
import "../styles/productos.css";

const Productos = () => {
  
  const productos = [
    {
      nombre: "Blue Chanel",
      categoria: "perfume",
      fabricante: "Chanel",
      stock: 20,
      id: "ch001",
    },
    {
      nombre: "Chanel N5",
      categoria: "perfume",
      fabricante: "Chanel",
      stock: 10,
      id: "ch002",
    },
    {
      nombre: "Coco Chanel",
      categoria: "perfume",
      fabricante: "Chanel",
      stock: 15,
      id: "ch003",
    },
    {
      nombre: "Mascara Impermeable",
      categoria: "maquillaje",
      fabricante: "Chanel",
      stock: 10,
      id: "ch004",
    },
    {
      nombre: "Le Rouge",
      categoria: "maquillaje",
      fabricante: "Chanel",
      stock: 5,
      id: "ch005",
    },
    {
      nombre: "Serum",
      categoria: "tratamiento",
      fabricante: "La Prairie",
      stock: 10,
      id: "lp001",
    },
    {
      nombre: "Anti Aging",
      categoria: "tratamiento",
      fabricante: "La Prairie",
      stock: 10,
      id: "lp002",
    },
    {
      nombre: "Skin Caviar",
      categoria: "tratamiento",
      fabricante: "La Prairie",
      stock: 20,
      id: "lp002",
    },
    {
      nombre: "Hugo Boss",
      categoria: "perfume",
      fabricante: "Hugo Boss",
      stock: 15,
      id: "hb001",
    },
    {
      nombre: "Versace",
      categoria: "perfume",
      fabricante: "Versace",
      stock: 20,
      id: "v001",
    },
  ];
  return (
    <div>
      <NavBar />
      <h2>Lista de Productos</h2>
      <div className="card-container">
        {productos.map((productos, index) => (
          <ListaProductos 
          key={index}
          nombre={productos.nombre}
          categoria={productos.categoria}
          fabricante={productos.fabricante}
          stock={productos.stock}
          id={productos.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Productos;
