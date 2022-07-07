import React, { useState } from "react";
import "./style.css";
import Foto from "../../assets/cardd3.jpg";
import Vetor from "../../assets/vector.png";
import Share from "../../assets/share.png";
import InfoDog from "../InfoDog";

// import { Container } from './styles';

function CardContent() {
  
  return (
    <>
      <div className="card-container">
        {/* <div>
          <button className="button-next"> ⟶</button>
          <button className="button-return"> ⟵</button>
        </div> */}
        <div>
          <img className="card-img" src={Foto} alt="" />
        </div>
        <InfoDog active={active}>
          <div className="info-dog-column">
            <div className="button-hover">
              <button onClick={handleClick} className="btn-fromtop">
                <img src={Vetor} alt="" />
              </button>
            </div>
            <div className="dog-content">
              <div className="dog-nome-row">
                <h1>Bob</h1>
                <button className="compartilhar-btn">
                  <img src={Share} alt="" />
                </button>
              </div>
              <p className="doador">
                {" "}
                <strong> ONG Proteger</strong>
              </p>
              <p className="local">São Paulo</p>
              <div className="row-container">
                <div className="row-item1">Informação</div>
                <div className="row-item2">Informação</div>
                <div className="row-item3">Informação</div>
                <div className="row-item4">Informação</div>
              </div>
              <p className="descricao">
                O Bob é um cachorro resgatado na rua. Acreditamos que foi
                abandonado por uma família nos arredores da ONG de propósito.
                Está conosco há 2 meses e ainda é um pouco desconfiado e sente
                saudades da antiga família.
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
            <button href="contato" className="btn-contatar">
              adotar pet <span>♥</span>
            </button>
          </div>
        </InfoDog>
      </div>
    </>
  );
}

export default CardContent;
