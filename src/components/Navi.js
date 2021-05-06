import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Register from './Register'

export default function Navi(props) {
    return ( 
        <nav classname="navbar navbar-dark bg dark">
            <div classname="container-fluid mx-4">
                <a classname="navbar-brand text left">LÖÜD FÖG: Väpör wïth  dBs</a>
                    <span className="d-flex">
                        <Link to="/register" className="mx-3 btn-outline-danger">Sign Up</Link>
                        {/* link to login                       */}
                    </span>
            </div>
        </nav>
    )
}

