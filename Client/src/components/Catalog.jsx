import ProductCard from './ProductCard.jsx';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Catalog.css'
import Pagination from './Pagination.jsx';

export default function Catalogue({filter, search}){
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(30);
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
      if (filter === "up"){
        setCurrentPage(1);
        var sortedup = [...products.sort((a, b)=> a.price - b.price)]
        setProducts(sortedup);
      }
      if (filter === "down"){
        setCurrentPage(1);
        var sorteddown = [...products.sort((a, b)=> b.price-a.price)];
        setProducts(sorteddown);
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