import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { DashboardFilter } from ".";
import { Badge } from "../../ui-kit/common-ui-components";
import * as routes from "../../lib/constants";

const Header =({cartData,handleApplyClick})=>{
    return(
      
        <header>
               <h1>Header</h1>
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">
                    <Link to={"/"}>Acme.com</Link>
                </span>
              <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collaspe"
                data-target="#navbarToggler"
                aria-controls="navbar-Toggler"
                aria-expanded="false"
                aria-label="Toggle navigation"
                
                >
               </button> 
               <DashboardFilter handleApplyClick={handleApplyClick} />
                <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarToggler"
                >
                <ul className="navbar-nav">
                    <span className="navbar-brand">
                    <Link to ={routes.REGISTRATION_ROUTE} >
                        Registration
                    </Link>{" "}
                    </span>
                    <span className="navbar-brand">
                    <Link to ={routes.LOGIN_ROUTE} >
                        Login
                    </Link>{" "}
                    </span>
                    <span className="navbar-brand">
                    <Link to ={routes.CONTACT_ROUTE} >
                        Contact Us
                    </Link>{" "}
                    </span>
                    <li className="nav-item">
                    <Link to={routes.CARTS_ROUTE}>
                        {" "}
                        <span className="nav-link active">
                        {" "}
                        <Badge count={cartData.cartCount} />{" "}
                        </span>{" "}
                    </Link>
                    
                    </li>
                </ul>
                </div>

           

           
          
            </nav>

        </header>
    );
};
Header.propTypes={
    cartData: PropTypes.any,
    handleApplyClick: PropTypes.func.isRequired
};
export default Header;