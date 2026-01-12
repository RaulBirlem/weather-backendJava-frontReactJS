import { translateCondition } from "../utils/conditionPtBR";

export function WeatherCard({ data }) {
  // Suporta retorno raw da WeatherAPI:
  const cidade = data?.location?.name;
  const pais = data?.location?.country;

  const current = data?.current;
  const lastUpdated = current?.last_updated;
  const temp = current?.temp_c;
  const feels = current?.feelslike_c;
  const humidity = current?.humidity;
  const wind = current?.wind_kph;
  const pressure = current?.pressure_mb;
  const code = current?.condition?.code;
  const textEn = current?.condition?.text;
  const isDay = current?.is_day; // 1 dia, 0 noite

  const condicaoPt = translateCondition(code, textEn, isDay);

  return (
    <div className="card">
      <div className="cardHeader">
        <h2 className="title">
          {cidade}{pais ? `, ${pais}` : ""}
        </h2>
        <div className="muted">Última atualização: {lastUpdated || "-"}</div>
      </div>

      <div className="grid">
        <div className="metric">
          <div className="label">Temperatura</div>
          <div className="value">{temp ?? "-"} °C</div>
        </div>

        <div className="metric">
          <div className="label">Sensação térmica</div>
          <div className="value">{feels ?? "-"} °C</div>
        </div>

        <div className="metric">
          <div className="label">Condição</div>
          <div className="value">{condicaoPt || "-"}</div>
        </div>

        <div className="metric">
          <div className="label">Umidade</div>
          <div className="value">{humidity ?? "-"} %</div>
        </div>

        <div className="metric">
          <div className="label">Vento</div>
          <div className="value">{wind ?? "-"} km/h</div>
        </div>

        <div className="metric">
          <div className="label">Pressão</div>
          <div className="value">{pressure ?? "-"} mb</div>
        </div>
      </div>
    </div>
  );
}
