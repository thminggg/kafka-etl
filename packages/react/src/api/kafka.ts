import axios from "axios";

const API_HOST = process.env.NEXT_PUBLIC_HOST;
const API_PORT = process.env.NEXT_PUBLIC_EXPRESS_PORT;

const KafkaAPI = axios.create({
  baseURL: `http://${API_HOST}:${API_PORT}`,
  timeout: 3000,
});

export default KafkaAPI;
