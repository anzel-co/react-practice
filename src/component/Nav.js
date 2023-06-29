import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <nav className="navigationBar">
            <h1 className="appTitle">REACT PRACTICE</h1>
            <ul className="navigationLinks">
                <li className="navigationPages">
                    <Link to='/'>Home</Link>
                </li>
                <li className="navigationPages">
                    <Link to='/link2'>Link 2</Link>
                </li>
                <li className="navigationPages">
                    <Link to='/link3'>Link 3</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Nav