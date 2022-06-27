import React from 'react';
import { Button } from 'react-bootstrap';

// import { Container } from './styles';

const CardDog: React.FC = () => (
    <div className="card-container">
        {/* style={{ background: `url(${Background})`,}} */}
        <div className="info-container">
            <div className="info-dog">
                <h6 className="dog-nome"></h6>
                <p className="doador"></p>
                <p className="local"></p>
                <div className="caracteristicas-row-container">
                    <div className="caracteristica-item"></div>
                </div>
                <p className="descricao"></p>
            <Button>Tenho Interesse</Button>    
            </div>
        </div>
    </div>
)

export default CardDog;