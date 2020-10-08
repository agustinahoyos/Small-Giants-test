import React from 'react';
import './Pagination.css';

export default function Pagination ({productsPerPage, totalProducts, paginate}){

 const pageNumbers = [];

  for (let i = 1; i<= Math.ceil(totalProducts / productsPerPage); i++){
    pageNumbers.push(i);
   }


return (

<nav >
  <ul class="pagination">
      {pageNumbers.map(number => (
          <li key={number} className="page-item"> 
           <a  name={number} className="navigation-link page-link" class="btn btn-outline-success" 
            onClick={(e)=> paginate(e) } href="!#">
               {number}
           </a>
          </li>


      ))}      
  </ul>

    </nav>

    )}




    