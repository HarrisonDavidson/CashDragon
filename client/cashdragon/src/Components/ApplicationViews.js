import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import Scale from "../Managers/ScaleManager";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Scale />} />

      </Routes>
   )
 
}