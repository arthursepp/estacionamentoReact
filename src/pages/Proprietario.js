import React, { useEffect, useState } from "react";
import {createProprietario } from "../api";
import { Link } from "react-router-dom";
import "../public/css/style.css";

const Proprietario = () => {
  const estiloDoLink = {
    textDecoration: "none", // Remover o sublinhado
    display: "inline-block", // Definir como bloco
  };

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verifica se os campos estão em branco
    if (!nome.trim() || !cpf.trim()) {
      alert("Por favor, preencha todos os campos.");
      return; // Retorna sem avançar para a nova rota
    }
    try {
      await createProprietario({ nome, cpf });
      // Limpa os campos
      setNome("");
      setCpf("");
      // Navega para a rota '/list'
      window.location.href = "proprietario/list";
    } catch (error) {
      console.error("Erro ao criar proprietário:", error);
    }
  };

  return (
    <div>
      <header className="w3-container w3-teal">
        <h1>Registrar proprietários</h1>
      </header>
      <br />

      <div className="w3-container">
        {" "}
        {/* Contêiner centralizado */}
        <form onSubmit={handleSubmit} className="w3-border form">
          <div className="w3-container w3-teal w3-padding">
            <h2>Registro</h2>
          </div>

          <div className="w3-padding">
            <label className="w3-text-teal">
              <b>Nome</b>
            </label>
            <input
              className="w3-input w3-border w3-light-grey"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <br />
            <label className="w3-text-teal">
              <b>CPF</b>
            </label>
            <input
              className="w3-input w3-border w3-light-grey"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <div className="w3-text-right">
              {" "}
              {/* Contêiner para alinhar o botão à direita */}
              <button
                className="w3-btn w3-blue-grey w3-block w3-margin-top"
                type="submit"
              >
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Proprietario;
