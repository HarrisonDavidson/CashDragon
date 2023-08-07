import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import {Scale} from "./Scales/Scales";
import { Bookkeeper } from "./Bookkeeper/Bookkeeper";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Scale />} />
        <Route path="Bookkeeper" element={<Bookkeeper />} />
      </Routes>
   )
 
}