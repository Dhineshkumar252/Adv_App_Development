// import { FaReact } from "https://esm.sh/react-icons/fa";
// import React from "react";
import './Navbar.scss';
import './Caru.css';
import Caru from "./Caru";
import Footer from "./Footer.jsx";
// import { Button } from "react-bootstrap";
import Nav from "./Nav";
// import { Button } from "@mui/material";
// import { ButtonGroup } from "react-bootstrap";

export default function Navbar() {
	
  
	return (
    <div className="App">
            <Nav/>
					<div className="caru">

					<Caru/>
					</div>
					<div className="footer">
                        <Footer/>
					</div>
		</div>
	);
}

