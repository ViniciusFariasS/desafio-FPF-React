import React, { useEffect, useState } from "react"
import perfil4 from '../../assets/profilePictures/Perfil4.png'
import './index.styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, useMediaQuery } from "@mui/material";

export default function More() {
    const isMobile = useMediaQuery('(max-width: 850px)');
    return (
        <div className="more">
            <div className="more-content">
                <div className="more-cards-header">
                    <div className="content-header">
                        <h4>Mais informações</h4>
                    </div>
                    <div id="content" className="content">
                    </div>
                </div>
                <div className="more-cards">
                    <div className="more-content-card">
                        <img src={perfil4} alt="" style={{ width: isMobile ? 100 : 150 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 16 }}>
                            <span>Desenvolvido por:</span>
                            <a href="https://www.linkedin.com/in/vin%C3%ADcius-f-4a6691128/" target="_blank"
                                style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 8, color: '#393939', textDecoration: 'none' }}>
                                <LinkedInIcon style={{ color: '#393939' }} />
                                Vinícius Farias Silva
                            </a>
                            <span style={{ fontSize: 13 }}>Desenvolvedor Front-end Pleno</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}