export const getLedger = () => {
  return fetch("/api/Ledger").then((res) => res.json())
}

export const getLedgerById = (id) => {
  return fetch(`/api/Ledger/GetByLedgerId?ledgerId=${id}`).then((res) => res.json())
}