// VeiculoList.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVeiculos } from "../api";
import "../public/css/style.css";

const VeiculoList = () => {
  const [veiculos, setVeiculos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const data = await getVeiculos();
        console.log(data); // Adicionado para depuração
        setVeiculos(data);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      }
    };

    fetchVeiculos();
  }, []);

  return (
    <div>
      <header className="w3-container w3-teal">
        <h1>Veículos registrados:</h1>
      </header>
      <div className="w3-container w3-margin-bottom w3-margin-top">
        <table className="w3-table-all">
          <thead>
            <tr>
              <th>ID</th>
              <th>Placa</th>
              <th>Ano</th>
              <th>Mensalidade</th>
              <th>Proprietário</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo) => (
              <tr key={veiculo.id_veiculo}>
                <td>{veiculo.id_veiculo}</td>
                <td>{veiculo.placa}</td>
                <td>{veiculo.ano}</td>
                <td>{veiculo.mensalidade}</td>
                <td>{veiculo.fk_proprietario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div className="w3-container w3-center">
        <button
          className="w3-btn w3-blue-grey"
          onClick={() => navigate('/')}
        >
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default VeiculoList;
