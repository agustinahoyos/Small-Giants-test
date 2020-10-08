import ProductCard from './ProductCard.jsx';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Catalogue.css'
import Pagination from './Pagination.jsx';

export default function Catalogue({filter, search}){
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(30);
    // const [currentProducts, setCurrentProducts] = useState([]);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);
   
   
      function paginate(e){
      e.preventDefault();
        setCurrentPage(e.target.name)
      }

    useEffect(() => {
      async function fetchProducts() {
        let res = await axios.get(`http://localhost:8080/api/search/${search}`)          
        setProducts(res.data.results)
    } fetchProducts();
  }, [search])

 

    useEffect(()=> {
      function isFiltered(filter) { 
      if (filter  ==="up"){
        setCurrentPage(1);
        var ordenados = [...products.sort((a, b)=> a.price - b.price)]
        setProducts(ordenados);
      }
      if (filter ==="down"){
        setCurrentPage(1);
        var ordenados = [...products.sort((a, b)=> b.price-a.price)];
        setProducts(ordenados);
        }
      if (filter ==="used"){
       setCurrentPage(1);
        async function usedProducts() {
        let res = await axios.get(`http://localhost:8080/api/search/${search}usado`)
          setProducts(res.data.results);     
          }usedProducts();
        }
      if (filter ==="new"){
        async function fetchProducts() {
         setCurrentPage(1);
          let res = await axios.get(`http://localhost:8080/api/search/${search}`)
          setProducts(res.data.results);    
        } fetchProducts();
      }
    } isFiltered(filter)
        }, [filter])


    return ( 
    <div className="super-container">
        <div className="catalogue-container">
            { currentProducts.length !== 0 && currentProducts.map((product) => 
              <ProductCard product={product}/>
            )}
         </div>        
          <div className="pagination-container">
            <Pagination productsPerPage={productsPerPage} 
              totalProducts={products.length} paginate={paginate} />
        </div>      
    </div>

    ) 

}