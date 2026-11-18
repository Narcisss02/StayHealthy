// frontend/src/api.js
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  // 204 No Content nu are corp
  return res.status === 204 ? null : res.json();
}

export function fetchAntrenamente() {
  return request("/antrenamente");
}

export function createAntrenament(antrenament) {
  return request("/antrenamente", { 
    method: "POST", 
    body: JSON.stringify(antrenament) 
  });
}

export function updateAntrenament(id, changes) {
  return request(`/antrenamente/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteAntrenament(id) {
  return request(`/antrenamente/${id}`, { method: "DELETE" });
}