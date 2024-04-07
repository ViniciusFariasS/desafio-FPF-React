import React, { useEffect, useState } from "react"
import dataJson from '../../data/data.json'
import Card from "../../components/Card";
import './index.styles.css'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Button, Modal, useMediaQuery } from "@mui/material";
import Form from "../../components/Form";

export interface IData {
    foto: string
    nome: string
    idade: number
    cpf: string
    email: string
    telefone: string
    endereco: string
    data_nascimento: string
    status: boolean
    genero: string
}

export default function Home() {
    const [data, setData] = useState<any>(dataJson);
    const [openFormModal, setOpenFormModal] = useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 850px)');

    return (
        <div className="home">
            <div className="home-header">
                <h3>Gerenciar cadastros</h3>
                <Button variant='contained'
                    style={{ backgroundColor: '#4F646F', textTransform: 'none', display: 'flex', gap: 4 }}
                    onClick={() => setOpenFormModal(true)}>
                    <PersonAddAlt1Icon />
                    Adicionar
                </Button>
            </div>
            <div className="home-content">
                <div className="home-cards-header">
                    <div className="content-header">
                        <h4>Cadastros</h4>
                    </div>
                    <div id="content" className="content">
                    </div>
                </div>
                <div className={`${isMobile ? 'home-cards-mobile' : 'home-cards'}`}>
                    {
                        data?.map((dt: IData, index: number) => {
                            return (
                                <div key={index}>
                                    <Card data={dt} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Modal
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                open={openFormModal} onClose={() => setOpenFormModal(false)}>
                <div style={{ width: '100%' }}>
                    <Form setCloseForm={setOpenFormModal} />
                </div>
            </Modal>
        </div>
    )
}