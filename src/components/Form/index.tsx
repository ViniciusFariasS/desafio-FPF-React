import { useState } from "react";
import './index.styles.css';
import { Button } from "@mui/material";

interface IForm {
    setCloseForm: (close: boolean) => void
}

export default function Form({ setCloseForm }: IForm) {
    const [formData, setFormData] = useState({
        photo: '',
        name: '',
        address: '',
        email: '',
        phone: '',
        birthdate: '',
        gender: ''
    });


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        setCloseForm(false);  
        alert('Seu formulário será enviado');
        e.preventDefault();
    };

    return (
        <div className="form-modal-content">
            <span onClick={() => setCloseForm(false)} className="close">&times;</span>
            <h2>Cadastrar nova pessoa</h2>
            <form id="personForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="photo">Foto:</label>
                    <input type="file" id="photo" name="photo" accept="image/*" onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} required />
                </div>
                <div>
                    <label htmlFor="address">Endereço:</label>
                    <input type="text" id="address" name="address" onChange={handleChange} value={formData.address} required />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} required />
                </div>
                <div>
                    <label htmlFor="phone">Telefone:</label>
                    <input type="tel" id="phone" name="phone" onChange={handleChange} value={formData.phone} required />
                </div>
                <div>
                    <label htmlFor="birthdate">Data de Nascimento:</label>
                    <input type="date" id="birthdate" name="birthdate" onChange={handleChange} value={formData.birthdate} required />
                </div>
                <div>
                    <label htmlFor="gender">Gênero:</label>
                    <select id="gender" name="gender" onChange={handleChange} value={formData.gender} required>
                        <option value="">Selecione</option>
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                        <option value="other">Outro</option>
                    </select>
                </div>

                <Button type="submit" style={{ textTransform: 'none' }}>Salvar</Button>
            </form>
        </div>
    );
}