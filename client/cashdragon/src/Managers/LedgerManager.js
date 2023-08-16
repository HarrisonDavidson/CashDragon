const apiUrl = "https://localhost:7178";

export const getLedger = () => {
  return fetch(`${apiUrl}/api/ledger`).then((res) => res.json())
}

export const getById = (id) => {
  return fetch(`${apiUrl}/api/ledger/getbyid?id=${id}`).then((res) => res.json())
}