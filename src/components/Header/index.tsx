import React from "react"
import './index.styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import LogoImage from '../../assets/logo/logo.svg'
import ProfileImage from '../../assets/profilePictures/Perfil3.png'

interface IHome {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void,
}

export default function Header({ setOpenMenu, openMenu }: IHome) {

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <header>
            <IconButton id="toggleMenu" onClick={handleOpenMenu}>
                <MenuIcon fontSize="medium" style={{ color: 'white' }} />
            </IconButton>
            <div className="logo">
                <img src={LogoImage} alt="Logo da Empresa" />
                <h4>Federação Paulista de Futebol</h4>
            </div>
            <div className="user">
                <img src={ProfileImage} alt="Foto do Usuário" />
            </div>
        </header>
    )
}