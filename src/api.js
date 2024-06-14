// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8081';

export const getProprietarios = async () => {
  try {
    const response = await axios.get(`${API_URL}/proprietario`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar proprietários:", error);
    throw error;
  }
};

export const createProprietario = async (proprietario) => {
  try {
    const response = await axios.post(`${API_URL}/proprietario`, proprietario);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar proprietário:", error);
    throw error;
  }
};

export const getVeiculos = async () => {
  try {
    const response = await axios.get(`${API_URL}/veiculo`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar veículos:", error);
    throw error;
  }
};

export const createVeiculo = async (veiculo) => {
  try {
    const response = await axios.post(`${API_URL}/veiculo`, veiculo);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar veículo:", error);
    throw error;
  }
};
