import "./App.css";
import {BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import axios from "axios"


function App() {

  const fetchData=() =>{
    console.log("fetchData")
return(
  fetch("http://localhost:4000/graphql/")
  
  .then(res => res.json())
  .then(data =>  {
console.log("data", data)
  })
)
}

useEffect(()=>{
  // fetchData();
  // console.log("Fetching", fetchData())
  axios.get("http://localhost:4000/graphql/")
      .then((response) => console.log(response.data));
},[])


  return (
  <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Scandiweb</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<Products />}  />
        <Route path="/cart" element={<Cart />}  />
      </Routes>
    </div>
  </Router>
  );
  
}

export default App;





