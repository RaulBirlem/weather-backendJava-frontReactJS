export async function fetchClima(cidade) {
  const q = cidade?.trim();
  if (!q) throw new Error("Informe uma cidade.");

  const url = `/api/clima?cidade=${encodeURIComponent(q)}`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Accept": "application/json" },
  });

  // Tenta parsear JSON mesmo em erro, para extrair mensagem
  let data = null;
  try {
    data = await res.json();
  } catch {
    // ignora
  }

  if (!res.ok) {
    const msg =
      data?.message ||
      data?.error ||
      `Erro na API (${res.status})`;
    throw new Error(msg);
  }

  return data;
}
