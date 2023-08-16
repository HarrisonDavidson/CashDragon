import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Bookkeeper } from "./Bookkeeper/Bookkeeper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function ApplicationViews() {

 return(
  <DndProvider backend={HTML5Backend} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Bookkeeper" element={<Bookkeeper />} />

      </Routes>
      </DndProvider>
   )
 
}