import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../views/home";
import Productos from "../views/productos";
import DetalleProductos from "../components/detalleProductos";
import DetalleProveedores from "../components/detalleProveedores";
import DetalleOrdenes from "../components/detalleOrdenes";
import Ordenes from "../views/ordenes";
import Proveedores from "../views/proveedor";
import NotFound from "../views/default";

export const routerInventory = () => {
    return (
      <Router>
        
        <Routes>
          <Route path="/" element ={< Home />} />
          <Route path="/productos" element ={< Productos />} />
          <Route path="/detalleProductos/:nombre/:id/:fabricante/:stock/:categoria" element ={< DetalleProductos />} />
          <Route path="/detalleProveedores/:nombre/:ruc/:telefono/:email/:categoria" element ={< DetalleProveedores />} />
          <Route path="/detalleOrdenes/:nombre/:ci/:producto/:cantidad/:email" element ={< DetalleOrdenes />} />
          <Route path="/ordenes" element ={< Ordenes />} />
          <Route path="/proveedor" element ={< Proveedores />} />
          <Route path="*" element ={< NotFound />} />
        </Routes>
        
      </Router>
    );
  };
  export default routerInventory;