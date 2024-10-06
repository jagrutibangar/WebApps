import React from 'react'

export default function Navbar() {
return (
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid" style={{height:100,backgroundColor:'goldenrod'}}>
<a className="navbar-brand" href="/"> </a>
<nav className="navbar bg-body-tertiary">
<div className="container">
<a className="navbar-brand" href="/">
<img src="C:/Users/jagru/OneDrive/Desktop/web/HotelNakshtra/src/components/Sparkle.svg" alt="LOGO" width="30" height="24"/>
</a>
</div>
</nav>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:500,fontPalette:'dark', fontWeight:'bold'}}>
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<a className="nav-link active" aria-current="page" href="/">Home</a>
</li>
<li className="nav-item">
<a className="nav-link" href="/">About Us</a>
</li>
<li className="nav-item">
<a className="nav-link" href="/">Menu</a>
</li>
<li className="nav-item">
<a className="nav-link" href="/">Orders & Bookings</a>
</li>
<li className="nav-item">
<a className="nav-link" href="/">Contact</a>
</li>

</ul>
<form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success" type="submit">Search</button>
</form>
</div>
</div>
</nav>
</div>
)
}
