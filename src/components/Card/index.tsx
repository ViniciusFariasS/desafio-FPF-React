import React, { useState } from "react"
import { IData } from "../../pages/home"
import { handlePicture } from "../../utils/utils";
import { grey } from "@mui/material/colors";
import './index.styles.css';
import { Button, Modal, useMediaQuery } from "@mui/material";

interface ICard {
    data: IData
}

export default function Card({ data }: ICard) {
    const [seeMore, setSeeMore] = useState<boolean>(false);
    const { nome, cpf, data_nascimento, email, endereco, foto, genero, idade, status, telefone } = data;
    const isMobile = useMediaQuery('(max-width: 850px)');
    return (
        <>
            <div className="card" style={{ display: 'flex', padding: 16, flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex' }}>
                    <div
                        className="card-content"
                        style={{
                            borderRight: `1px solid ${grey[300]}`,
                            paddingRight: 16
                        }}>
                        <img src={handlePicture(foto)} alt="" style={{ width: isMobile ? 100 : 150, borderRadius: 8 }} />
                        <div>
                            <h5>data de nascimento</h5>
                            <span>{data_nascimento}</span>
                        </div>
                        <div>
                            <h5>Idade</h5>
                            <span>{idade} anos</span>
                        </div>
                    </div>
                    <div className="card-content" style={{ padding: '0 16px', gap: isMobile ? 16 : 24, fontSize: isMobile ? 12 : 16 }}>
                        <h2>{nome}</h2>
                        <span><strong>CPF:</strong> {cpf}</span>
                        <span><strong>E-mail:</strong> {email}</span>
                        <span><strong>Telefone:</strong> {telefone}</span>
                        <span><strong>Endereço:</strong> {endereco}</span>
                        <span><strong>Status:</strong> {status}</span>
                    </div>
                </div>
                <div style={{ borderTop: `1px solid ${grey[300]}`, padding: 16, paddingBottom: 0, display: 'flex', justifyContent: 'end', }}>
                    <Button variant='contained' style={{ backgroundColor: '#4F646F', textTransform: 'none', display: 'flex', gap: 4 }} onClick={() => setSeeMore(true)}>
                        Ver cadastro completo
                    </Button>
                </div>
            </div>
            <Modal style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} open={seeMore} onClose={() => setSeeMore(false)}>
                <div className="card" style={{ display: 'flex', padding: 16, flexDirection: 'column', gap: 16, maxWidth: 500 }}>
                    <div style={{ display: 'flex' }}>
                        <div
                            className="card-content"
                            style={{
                                borderRight: `1px solid ${grey[300]}`,
                                paddingRight: 16
                            }}>
                            <img src={handlePicture(foto)} alt="" style={{ width: 150, borderRadius: 8 }} />
                        </div>
                        <div className="card-content" style={{ padding: '0 16px', gap: 16, fontSize: isMobile ? 12 : 14 }}>
                            <h2>{nome}</h2>
                            <span><strong>gênero:</strong> {genero}</span>
                            <span><strong>data de nascimento:</strong> {data_nascimento}</span>
                            <span><strong>Idade:</strong> {idade} anos</span>
                            <span><strong>CPF:</strong> {cpf}</span>
                            <span><strong>E-mail:</strong> {email}</span>
                            <span><strong>Telefone:</strong> {telefone}</span>
                            <span><strong>Endereço:</strong> {endereco}</span>
                            <span><strong>Status:</strong> {status}</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}