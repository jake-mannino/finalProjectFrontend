import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Navi(props) {
  return (

      <div className="yungmoney" style={{
                backgroundcolor: "rgba (4, 2, 128, 0.4)"
}}>
      <div className="justify-self-center text-center align-items-center">
    <nav className="navbar navbar-dark justify-self-center text-center align-items-center">
      <div className="container-fluid mx-4 justify-self-center text-center align-items-center">
        <a className="navbar-brand text center">
          <h1 className="text-info font-weight-bolder text-center">LÖÜD FÖG</h1>
          <div>
            <h4 className="text-info font-weight-bolder text-center">Väpör wïth dBs</h4>
          </div>
        </a>
        <span className="justify-self-center text-center align-items-center">
          <Link to="/auth" className="mx-3 btn-outline-light">
            Login
          </Link>
          <Link to="/register" className="mx-3 btn-outline-light">
            Sign Up
          </Link>
        </span>
      </div>
    </nav>
    </div>
    </div>
  );
}
