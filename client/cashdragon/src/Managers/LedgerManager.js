const apiUrl = "https://localhost:7178";

export const ledger = (userObject) => {
  return fetch(`${apiUrl}/api/ledger/getbyledgerid?ledgerid=${ledger.ledgerid}`)
  .then((r) => r.json())
    .then((ledger) => {
      if(ledger.ledgerid){
        localStorage.setItem("ledger", JSON.stringify(ledger));
        return userProfile
      }
      else{
        return undefined
      }
    });
};
