import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProprietarios, createProprietario } from "../api";
import "../public/css/style.css";

const Proprietario = () => {
  const [proprietarios, setProprietarios] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
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
      await createProprietario({ nome, cpf });
      // Atualiza a lista de proprietários
      const data = await getProprietarios();
      setProprietarios(data);
    } catch (error) {
      console.error("Erro ao criar proprietário:", error);
    }
  };

  return (
    <div>
      <header className="w3-container w3-teal">
        <h1>Proprietários registrados:</h1>
      </header>
      <div className="w3-container w3-margin-bottom w3-margin-top">
        <table className="w3-table-all">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {proprietarios.map((prop) => (
              <tr key={prop.id_proprietario}>
                <td>{prop.id_proprietario}</td>
                <td>{prop.nome}</td>
                <td>{prop.cpf}</td>
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

export default Proprietario;
