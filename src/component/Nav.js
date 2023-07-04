import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Modal from "../elements/Modal"; 
import SideBar from "./SideBar";

const Nav = () => {
    const auth = useContext(AuthContext)
    const [showConfirmation, setShowConfirmation] = useState(null)
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
    
    const onClickHandler = () => {
        setShowConfirmation(true)
    }

    const onSideBarOpenHandler = () => {
        setSideBarIsOpen(!sideBarIsOpen)
        setShowConfirmation(false)
    }

    const onConfirmHandler = () => {
        auth.logout()
        localStorage.removeItem('authenticated')
    }

    const onCancelHandler = () => {
        setShowConfirmation(false)
    }

    return (
        <>
        {sideBarIsOpen && <SideBar showConfirmation={showConfirmation} setShowConfirmation={setShowConfirmation} ></SideBar>}
        <nav className="navigationBar">
            <h1 className="appTitle">REACT PRACTICE</h1>
            <button className="sideBarButton" onClick={onSideBarOpenHandler}>{sideBarIsOpen ? <p style={{fontSize: '2em'}}>
                    &nbsp;&#10006;
                </p> :
                <>
                    <span />
                    <span />
                    <span />
                <>
            </></>
            }
            </button>
            <ul className="navigationLinks">
                <li className="navigationPages">
                    <NavLink to='/' style={({ isActive, isPending }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "black" : "white",
                        textDecoration: 'none'
                    }}}>Home</NavLink>
                </li>
                <li className="navigationPages">
                    <NavLink to='/link2' style={({ isActive, isPending }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "black" : "white",
                        textDecoration: 'none'
                    }}}>Link 2</NavLink>
                </li>
                <li className="navigationPages">
                    <NavLink to='/link3' style={({ isActive, isPending }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "black" : "white",
                        textDecoration: 'none'
                    }}}>Link 3</NavLink>
                </li>
                <li className="navigationPages">
                    <button className="logoutButton" onClick={onClickHandler} >Logout</button>
                </li>
            </ul>
            {showConfirmation === true && <Modal
            onConfirmHandler={onConfirmHandler}
            onCancelHandler={onCancelHandler}>
            </Modal>}
        </nav>
        <Outlet />
        </>
    )
}

export default Nav