import React, {useState, useEffect} from 'react';
import Catalogo from './Catalogo.jsx';

export default function NavBar(){
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");


  function handleClick(e) {
    e.preventDefault();
    setFilter(e.target.name)
  }

    return (
      <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="/home">Henry Challenge</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
         </button>

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
        <li key="home" class="nav-item active">
           <a class="nav-link" href="/">Home </a>
        </li>
        <li key="about" class="nav-item">
           <a class="nav-link" href="/about">About</a>
        </li>
        <li key="filtrar" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filtrar
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <button class="dropdown-item" name="up" onClick={(e)=> handleClick(e)} >Precio ascendente</button>
          <button class="dropdown-item" name="down" onClick={(e)=> handleClick(e)} >Precio descendente</button>
          <button class="dropdown-item" name="new" onClick={(e)=> handleClick(e)}>Nuevos</button>
          <button class="dropdown-item" name="used" onClick={(e)=> handleClick(e)}>Usados</button>
        </div>
      </li>
    </ul>
  
    <form class="form-inline my-2 my-lg-0" onSubmit={(e) => {
    e.preventDefault();
     }}>
      <input id="inputvalue" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
      onChange={e => setSearch(e.target.value)}/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>

 
</nav>
<Catalogo id="catalogo" search={search} filter={filter}/>
</div>
)}
