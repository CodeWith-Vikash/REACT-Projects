import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container" style={{backgroundColor:"rgb(125, 96, 205)",minWidth:"100vw",margin:"0",paddingLeft:"30px"}}>
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0 text-body-secondary">Home</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/cart" className="nav-link p-0 text-body-secondary">Cart</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/products" className="nav-link p-0 text-body-secondary">Products</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/contact" className="nav-link p-0 text-body-secondary">Contact</NavLink></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p style={{color:"white"}}>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="h2up1" style={{maxWidth:"250px"}}/>
            <button className="btn btn-primary" type="button" fdprocessedid="3dg9b">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p style={{color:"white"}}>© 2024 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>
  )
}

export default Footer