
import { useState } from "react";

import Navbar from "./components/navbar"
import Head from "./components/title"


  
  const Card = ({ product, updateCount }) => {
    const [addedToCart, setAddedToCart] = useState(false);
  
    const handleClick = () => {
      if (addedToCart) {
        updateCount(-1);
      } else {
        updateCount(1);
      }
      setAddedToCart(!addedToCart);
    }
  return (
 
      <div className=' col-md-6 col-lg-3'>

      <div class="  mb-4 my-4 mx-5" >
        <img class="product-image card-img-top img-fluid" src={product.url} alt="..." />
        <div class="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text font-weight-bold text-success">{product.price}</p>
          <button onClick={handleClick} className="btn btn-primary">{addedToCart ? 'Remove from Cart' : 'Add to Cart'}</button>
        </div>
      </div>
    </div>
  )}
    
 





const data = [
  {
    id: '1',
    name: "Motorolla g22",
    description: "4 GB RAM | 64 GB ROM | Expandable upto 1 TB",
    url: "https://www.refurbished.store/cache/images/motorola-moto-g22-zwart-frontandback_600x600_BGresize_16777215-tj.png",
    price: "Rs. 22,999"
  },
  {
    id: '2',
    name: "Samsung s23 ultra",
    description: "12 GB RAM | 256 GB ROM | 5000 MAH Battery",
    url: "https://www.jiomart.com/images/product/original/rvpy9exeeo/samsung-galaxy-s23-ultra-samsung-s23-ultra-back-cover-case-product-images-orvpy9exeeo-p600501754-0-202304131830.jpg?im=Resize=(420,420)",
    price: "Rs. 1,22,999"
  },
  {
    id: '3',
    name: "Dell Inspiron",
    description: "Core i3 | 11th gen | 8 GB RAM / 512 GB SSD",
    url: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3530-intel/media-gallery/black/notebook-inspiron-15-3530-nt-plastic-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
    price: "Rs. 54,599"
  },
  {
    id: '4',
    name: "Sony LED Smart TV",
    description: "43 inch | Ultra HD | Google TV",
    url: "https://cdn1.smartprix.com/rx-iSUL96nlp-w1200-h1200/SUL96nlp.jpg",
    price: "Rs. 26,999"
  },
  {
    id: '5',
    name: "Sony Playstation 5",
    description: "Playstation 5 console | Wireless controller | AC power cord",
    url: "https://cdn.siasat.com/wp-content/uploads/2022/10/ps5.jpg",
    price: "Rs. 55,999"
  },
  {
    id: '6',
    name: "Canon Printers",
    description: "Color inkjet | G2012",
    url: "https://media.extra.com/s/aurora/100301106_800/CANON-PIXMA%2C-All-in-One-Inkjet-Printer%2C-Wireless%2C-Print%2C-Copy%2C-Scan%2C?locale=en-GB,en-*,*",
    price: "Rs. 12,919"
  },
  {
    id: '7',
    name: "Boat Power Bank",
    description: "10000 MAH | Lithium Ion | Micro connector",
    url: "https://www.boat-lifestyle.com/cdn/shop/products/1_82e679ad-c2d0-4435-bb17-f9fbc84d445e_1500x.png?v=1613457312",
    price: "Rs. 6,299"
  },
  {
    id: '8',
    name: "Boult Airpods",
    description: "IP95 water resistant | 60 H battery life | White, In the ear",
    url: "https://m.media-amazon.com/images/I/71aGC9QkczL._AC_UF1000,1000_QL80_.jpg",
    price: "Rs. 1,999"
  }

];
const ProductList = ({ data }) => {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="container">
      <div className="row">
        {data.map(product => (
          <Card key={product.id} product={product} updateCount={updateCount} counts={updateCount} />
        ))}
      </div>
    </div>
  );
};







const App = () => {



  const [count,setCount] =useState(0);
  const increment =()=>{
    setCount(count+1);
  }
  const decrement =()=>{
    setCount(count-1);
  }
  const reset =()=>{
    setCount(0);
  }
  return (
    <div>
    <p> count :{count}</p>
    <button onClick={increment}> Increment</button>
    <button onClick={decrement}> decrement</button>
    <button onClick={reset}> reset</button>

      
      <Navbar counts={count} onClick={increment} />
      <Head />
      <ProductList data={data} />

    </div>
  )
}

export default App
