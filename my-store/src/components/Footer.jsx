import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="container" style={{backgroundColor:"rgb(125, 96, 205)"}}>
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><NavLink to="/home" class="nav-link p-0 text-body-secondary">Home</NavLink></li>
          <li class="nav-item mb-2"><NavLink to="/cart" class="nav-link p-0 text-body-secondary">Cart</NavLink></li>
          <li class="nav-item mb-2"><NavLink to="/products" class="nav-link p-0 text-body-secondary">Products</NavLink></li>
          <li class="nav-item mb-2"><NavLink to="/contact" class="nav-link p-0 text-body-secondary">Contact</NavLink></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p style={{color:"white"}}>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="h2up1"/>
            <button class="btn btn-primary" type="button" fdprocessedid="3dg9b">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p style={{color:"white"}}>© 2024 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
  )
}

export default Footer