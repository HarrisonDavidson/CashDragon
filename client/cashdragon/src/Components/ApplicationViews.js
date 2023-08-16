import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Scales/Scales";
import { Bookkeeper } from "./Bookkeeper/Bookkeeper";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Bookkeeper" element={<Bookkeeper />} />

      </Routes>
   )
 
}