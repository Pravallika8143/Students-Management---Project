import React from "react";
import { Link } from "react-router-dom";



function Navbar(){
    return (
        <div>
           <nav class="navbar navbar-expand-lg bg-light m-0 p-0">
  <div class="container-fluid">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTha5bUr3NZ_mpYwmsxPuEY2cGWKsTNnBbF4A&s" style={{width:"100px"}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav " style={{marginLeft:"900px"}}>
        <li class="nav-item">
          <Link class="nav-link" to="/Students">Students</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addStudent/">Add Student</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
</div>
)}

export default Navbar;