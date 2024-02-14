import { FaReact } from "https://esm.sh/react-icons/fa";
import React from "react";
import './Navbar.scss';
import './Caru.css';
import Caru from "./Caru";
import Footer from "./Footer.jsx";
import { Button } from "react-bootstrap";
import Nav from "./Nav";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";
import AdminCaru from "./AdminCaru";
// import { Button } from "@mui/material";
// import { ButtonGroup } from "react-bootstrap";

export default function AdminH() {
	
  
	return (
    <div className="App">
            <AdminNav/>
					<div className="caru">

					<AdminCaru/>
					</div>
					<div className="footer">
                        <AdminFooter/>
					</div>
		</div>
	);
}

