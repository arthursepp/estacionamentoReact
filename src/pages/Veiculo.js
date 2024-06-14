import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createVeiculo, getProprietarios } from "../api";

const VeiculoForm = () => {
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [mensalidade, setMensalidade] = useState("");
  const [fk_proprietario, setFkProprietario] = useState("");
  const [proprietarios, setProprietarios] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProprietarios = async () => {
      try {
        const data = await getProprietarios();
        setProprietarios(data);
      } catch (error) {
        console.error("Erro ao buscar proprietários:", error);
      }
    };

    fetchProprietarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const novoVeiculo = {
        placa,
        ano,
        mensalidade,
        fk_proprietario,
      };

      await createVeiculo(novoVeiculo);

      setPlaca("");
      setAno("");
      setMensalidade("");
      setFkProprietario("");

      navigate("/veiculo/list");
    } catch (error) {
      console.error("Erro ao criar veículo:", error);
    }
  };

  return (
    <div>
      <header className="w3-container w3-teal">
        <h1>Registrar veículo</h1>
      </header>
      <br />

      <div className="w3-container">
        <form onSubmit={handleSubmit} className="w3-border form">
          <div className="w3-container w3-teal w3-padding">
            <h2>Registro do carro:</h2>
          </div>
          <div className="w3-padding">
            <label className="w3-text-teal">
              <b>Placa:</b>
            </label>
            <input
              className="w3-input w3-border w3-light-grey"
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              required
            />
            <br />
            <label className="w3-text-teal">
              <b>Ano:</b>
            </label>
              <input
                className="w3-input w3-border w3-light-grey"
                type="number"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                required
              />
            <br />
            <label className="w3-text-teal">
              <b>Mensalidade:</b>
            </label>
              <input
              className="w3-input w3-border w3-light-grey"
                type="number"
                value={mensalidade}
                onChange={(e) => setMensalidade(e.target.value)}
                required
              />
            <br />
            <label className="w3-text-teal">
              <b>Proprietário:</b>
              <select
                value={fk_proprietario}
                onChange={(e) => setFkProprietario(e.target.value)}
                required
              >
                <option value="">Selecione um proprietário</option>
                {proprietarios.map((proprietario) => (
                  <option
                    key={proprietario.id_proprietario}
                    value={proprietario.id_proprietario}
                  >
                    {proprietario.nome}
                  </option>
                ))}
              </select>
            </label>
            <button
                className="w3-btn w3-blue-grey w3-block w3-margin-top"
                type="submit"
              >
                Registrar
              </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default VeiculoForm;
