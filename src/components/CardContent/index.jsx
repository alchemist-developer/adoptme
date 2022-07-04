import React from "react";
import "./style.css";
import Foto from '../../assets/cardd3.jpg'
import Vetor from '../../assets/vector.png'
import Share from '../../assets/share.png'

// import { Container } from './styles';

const CardContent = () => {
  return (
    <>
      <div className="card-container">
        {/* style={{ background: `url(${Background})`,}} para randomizar a imagem
        + colocar componente navbar acima do card */}
        <div>
          <button className="button-next"> ⟶</button>
          <button className="button-return"> ⟵</button>
        </div>
        <div>
          <img className="card-img" src={Foto} alt="" />
        </div>
        <div className="info-container">
          <div className="info-dog-column">
            <div className="button-hover">
              <button className="btn-fromtop">
                <img src={Vetor} alt="" />
              </button>
            </div>
            <div className="dog-nome-row">
              <h1>Bob</h1>
              <button className="compartilhar-btn">
                <img src={Share} alt="" /> Compartilhar
              </button>
            </div>
            <p className="doador">ONG Proteger</p>
            <p className="local">Penha, São Paulo, BR.</p>
            <div className="row-container">
              <div className="row-item1">Informação</div>
              <div className="row-item2">Informação</div>
              <div className="row-item3">Informação</div>
              <div className="row-item4">Informação</div>
            </div>
            <p className="descricao">
              O Bob é um cachorro resgatado na rua. Acreditamos que foi
              abandonado por uma família nos arredores da ONG de propósito. Está
              conosco há 2 meses e ainda é um pouco desconfiado e sente saudades
              da antiga família.
            </p>
            <div className="observacoes">
              <p>Observações importantes</p>
              <ul>
                <li>Precisa de espaço para brincar</li>
                <li>É desconfiada</li>
                <li>É desconfiada</li>
                <li>É desconfiada</li>
              </ul>
            </div>
            <div className="row-container">
              <div className="row-item1">Informação</div>
              <div className="row-item2">Informação</div>
              <div className="row-item3">Informação</div>
              <div className="row-item4">Informação</div>
            </div>
          </div>
          <button className="btn-contatar">
            Adotar pet <span>♥</span>
          </button>
        </div>
        {/* botão para adotar, useState para alterar Interesse x Adotar
         no collapse*/}
      </div>
    </>
  );
}

export default CardContent;
