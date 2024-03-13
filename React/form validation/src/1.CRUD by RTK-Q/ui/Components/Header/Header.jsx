import React from 'react'
import { Button, Collapse, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <Navbar expand="lg">
                    <NavbarBrand>Clip-Kart</NavbarBrand>
                    <Nav className="m-auto navLink">
                        <NavItem>
                            <NavLink to={"/"}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/about"}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Contact us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/product"}>Products</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
        </>
    )
}
