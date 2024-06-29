import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <section className="section footer bg-danger text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6>Company details</h6>
             < hr />
              <p className="text-white">
                  Fruits are the mature ovary of a flowering plant,
                   usually containing seeds. They are a vital part of
                    the human diet, providing essential nutrients,
                     vitamins, minerals, and dietary fiber. Fruits
                      come in a variety of forms, flavors, and textures,
                       and they can be consumed fresh, dried, juiced, or
                        cooked.
              </p>
            </div>
            <div className=" li col-md-4 text-white">
  <h6>Quick Links</h6>
  <hr />
  <div><Link to="/"className="link-custom-color">Home</Link></div>
  <div><Link to="/login"className="link-custom-color">Login</Link></div>
  <div><Link to="/cart"className="link-custom-color">Cart</Link></div>
  <div><Link to="/additems"className="link-custom-color">Add Items</Link></div>
</div>
            <div className="col-md-4">
                <h6>Address</h6>
                <hr />
                <div> <p className="text-white mb-1">#67821,G Nagar,Marthandam,India.</p></div>
                <div> <p className="text-white mb-1">pin code-629101.</p></div>
                <div> <p className="text-white mb-1">+91-9876543201.</p></div>
                <div> <p className="text-white mb-1">ganproducts@gmail.com</p></div>
                
                
            </div>
          </div>
        </div>
      </section>
      
    );
}
export default Footer;
