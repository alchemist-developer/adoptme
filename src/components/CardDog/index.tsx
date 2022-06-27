import React from 'react';
import { Button } from 'react-bootstrap';

// import { Container } from './styles';

const CardDog: React.FC = () => (
    <div className="card-container">
        {/* style={{ background: `url(${Background})`,}} para randomizar a imagem
        + colocar componente navbar acima do card */}
        <div className="info-container">
            <div className="info-dog-column">
                <div className="dog-nome-row">
                    <h6>Bob</h6>
                    <Button className="compartilhar-btn"></Button>
                </div>
                <p className="doador">ONG Proteger</p>
                <p className="local">Penha, São Paulo, BR.</p>
                <div className="caracteristicas-row-container">
                    <div className="caracteristica-item">Experiente</div>
                    <div className="caracteristica-item">Macho</div>
                    <div className="caracteristica-item">Yorkshire</div>
                </div>
                <p className="descricao">O Bob é um cachorro resgatado na rua. Acreditamos que foi abandonado por uma família nos arredores da ONG de propósito. Está conosco há 2 meses e ainda é um pouco desconfiado e sente saudades da antiga família.</p>
                <div className="personalidade-row-container">
                    <div className="personalidade-item">Arisco</div>
                    <div className="personalidade-item">Desconfiado</div>
                </div>
                <div className="observacoes">
                    <p>Observações importantes</p>
                    <ul>
                        <li>Precisa de espaço para brincar</li>
                        <li>É desconfiada</li>
                    </ul>
                </div>
            </div>
        </div>
        <Button>Tenho Interesse // Adotar </Button> 
        {/* botão para adotar, useState para alterar Interesse x Adotar
         no collapse*/}
    </div>
)

export default CardDog;