import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import GuviLogo from '../src/assets/Guvi-blog-logo.png'
import navimg1 from '../src/assets/blog-header.png'
function TopNav() {
  return (
<>
<nav className="navbar bg-body-tertiary topnav">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={GuviLogo} alt="Bootstrap" width="120" height="50"/>
    </a>
  </div>
</nav>
<div className='container'>
<div className="navimg d-flex justify-content-center">
<img src={navimg1} alt="Bootstrap" width="90%" height="30%"/>
</div>

</div>
</>  )
}

export default TopNav