import React from "react"
import './index.styles.css'
import { Link, useLocation } from "react-router-dom"
import { useMediaQuery } from "@mui/material";

interface IMenu {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void
}

export default function Menu({ openMenu, setOpenMenu }: IMenu) {
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width: 850px)');

    return (
        <nav className={`${openMenu ? '' : 'hidden'} ${isMobile ? 'show' : ''}`}>
            {
                openMenu &&
                <ul id="nav-list">
                    <li id='nav-item' onClick={() => isMobile ? setOpenMenu(false) : {}} className={location.pathname === '/' ? 'active' : ""}>
                        <Link to="/">Gerenciar cadastros </Link>
                    </li>
                    <li id='nav-item' onClick={() => isMobile ? setOpenMenu(false) : {}} className={location.pathname === '/more' ? 'active' : ""} >
                        <Link to="/more">Mais informações</Link>
                    </li>
                </ul>
            }
        </nav >
    )
}