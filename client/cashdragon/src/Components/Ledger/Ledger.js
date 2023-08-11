import { getLedger, getLedgerById } from "../../Managers/LedgerManager"
import React, { useEffect, useState } from "react"

export const Ledger = ({ ledger }) => {

    return (
        <>
        <div>
            <p>{ledger.ledgerAmount}</p>
        </div>
        </>
    )
}


//     const [ledger, setLedger] = useState([])

//     const localCashDragonUser = localStorage.getItem("userProfile");
//     const cashDragonUserObject = JSON.parse(localCashDragonUser)

//     useEffect(() => {
//         getLedger(cashDragonUserObject).then((data) => {
//             setLedger(data)
//         })
//     }, [])

//     return (
//         <>
//         <h1>Ledger</h1>
//         <div>
//             {ledger.map((ledger) => {
//                 return <Ledger key={ledger.id} ledger={ledger} />
//             })}
//         </div>
//         </>
//     )
// }