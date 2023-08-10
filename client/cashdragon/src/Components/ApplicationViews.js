import React from "react";
import { Route, Routes } from "react-router-dom";
import {Scale} from "./Scales/Scales";
import { Bookkeeper } from "./Bookkeeper/Bookkeeper";
import {LedgerDisplay} from './Scales/Ledger/Ledger'

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Scale />} />
        <Route path="Bookkeeper" element={<Bookkeeper />} />
        <Route path="Ledger" element={<LedgerDisplay />} />
      </Routes>
   )
 
}