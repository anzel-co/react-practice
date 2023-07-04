import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

const SideBar = props => {

    const onClickHandler = () => {
        props.setShowConfirmation(true)
    }

    return (
        <div className="sideBar">
            <ul className="sideBarLinks">
                <li className="sideBarPages">
                    <NavLink to='/' style={({ isActive, isPending }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "black" : "white",
                        textDecoration: 'none'
                    }}}>Home</NavLink>
                </li>
                <li className="sideBarPages">
                    <NavLink to='/link2' style={({ isActive, isPending }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "black" : "white",
                        textDecoration: 'none'
                    }}}>Link 2</NavLink>
                </li>
                <li className="sideBarPages">
                    <NavLink to='/link3' style={({ isActive, isPending }) => {
                        return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "black" : "white",
                        textDecoration: 'none'
                    }}}>Link 3</NavLink>
                </li>
                <li className="sideBarPages">
                    <button className="logoutButton" onClick={onClickHandler} >Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default SideBar