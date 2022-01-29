import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="nav justify-content-center">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Strona główna</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="about">O nas</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="pricing">Cennik</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    )
}

export default Navbar
