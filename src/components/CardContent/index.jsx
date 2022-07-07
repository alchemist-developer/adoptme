import React, { useState } from "react";
import "./style.css";
import Foto from "../../assets/cardd3.jpg";
import Vetor from "../../assets/vector.png";
import Share from "../../assets/share.png";
import InfoDog from "../InfoDog";

// import { Container } from './styles';

function CardContent() {
    const [active, setActive] = useState(false);
  function handleClick() {
    setActive((oldActive) => !oldActive);
  }


  
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
                <h1>{}</h1>
                <button className="compartilhar-btn">
                  <img src={Share} alt="" />
                </button>
              </div>
              <p className="doador">
                {" "}
                <strong>{}</strong>
              </p>
              <p className="local">{}</p>
              <div className="row-container">
                <div className="row-item1">{}</div>
                <div className="row-item2">{}</div>
                <div className="row-item3">{}</div>
                <div className="row-item4">{}</div>
              </div>
              <p className="descricao">
                {}
              </p>
              <div className="observacoes">
                <p>Observações importantes</p>
                <p>{}</p>
              </div>
              <div className="row-container">
                <div className="row-item1">{}</div>
                <div className="row-item2">{}</div>
                <div className="row-item3">{}</div>
                <div className="row-item4">{}</div>
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
