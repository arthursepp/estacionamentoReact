
import React from "react";
import { Link } from "react-router-dom";
import "../public/css/style.css"; // Importe o arquivo CSS

const Home = () => {
  const estiloDoLink = {
    textDecoration: "none", // Remover o sublinhado
    display: "inline-block" // Definir como bloco
  };  

  return (
    <div>
      <div className="w3-container w3-teal">
        <h1>Gerenciar estacionamento</h1>
      </div>
      <br />
      <div className="cardContainer cardInline" style={{ display: "flex" }}> {/* Adicione 'display: flex' aqui */}
        <div className="cardLinkStyle">
          <Link to="/proprietario" style={estiloDoLink}>
            <div className="w3-card-4 w3-margin card">
              <header className="w3-container w3-light-grey w3-padding">
                <h3>
                  <b>Cadastrar um proprietario</b>
                </h3>
              </header>
              <div className="w3-container">
                <p>Cadastrar o proprietario de um veículo</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="cardLinkStyle">
          <Link to="/veiculo" style={estiloDoLink}>
            <div className="w3-card-4 w3-margin card">
              <header className="w3-container w3-light-grey w3-padding">
                <h3>
                  <b>Cadastrar um veículo</b>
                </h3>
              </header>
              <div className="w3-container">
                <p>Cadastrar o veículo de uma pessoa</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="cardLinkStyle">
          <Link to="/proprietario/list" style={estiloDoLink}>
            <div className="w3-card-4 w3-margin card">
              <header className="w3-container w3-light-grey w3-padding">
                <h3>
                  <b>Ver os clientes</b>
                </h3>
              </header>
              <div className="w3-container">
                <p>Ver os clientes cadastrados no sistema</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="cardLinkStyle">
          <Link to="/veiculo/list" style={estiloDoLink}>
            <div className="w3-card-4 w3-margin card">
              <header className="w3-container w3-light-grey w3-padding">
                <h3>
                  <b>Ver os veículos</b>
                </h3>
              </header>
              <div className="w3-container">
                <p>Ver os veículos cadastrados no sistema</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
      <br />
      {/* Outros elementos e links */}
    </div>
  );
};

export default Home;