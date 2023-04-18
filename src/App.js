import "./App.css"
import { useState, useEffect } from "react";
import { Products } from "./components/Producs";
import Button from "./components/Button";
function App() {
  const [products, setProduct] = useState([]);
  const fetchProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <table class="table">
        <thead>
          <tr >
            <th scope="col">No</th>
            <th scope="col">Pictures</th>
        
            <th scope="col">Name</th>
            <th scope="col">Infomation</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <Products products={products} />
      </table>
    </div>
  );
}

export default App;
