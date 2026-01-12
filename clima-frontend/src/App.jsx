import { useState } from "react";
import { fetchClima } from "./services/weatherService";
import { WeatherCard } from "./components/WeatherCard";
import "./app.css";

export default function App() {
  const [cidade, setCidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [data, setData] = useState(null);

  async function onBuscar(e) {
    e.preventDefault();
    setErro("");
    setData(null);

    try {
      setLoading(true);
      const json = await fetchClima(cidade);

      // Se seu backend retornar exatamente o JSON da WeatherAPI,
      // este if detecta o erro "code":1006 (cidade não encontrada)
      if (String(json).includes('"code":1006') || json?.error?.code === 1006) {
        throw new Error("Cidade não encontrada. Verifique o nome e tente novamente.");
      }

      setData(json);
    } catch (err) {
      setErro(err?.message || "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Consulta de Clima</h1>
        <p className="muted">
          Digite uma cidade e veja as informações meteorológicas retornadas pelo seu backend Java.
        </p>

        <form className="form" onSubmit={onBuscar}>
          <input
            className="input"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Ex: Porto Alegre"
          />
          <button className="button" disabled={loading}>
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </form>

        {erro && <div className="alert">{erro}</div>}

        {data && <WeatherCard data={data} />}
      </div>
    </div>
  );
}
