import React from "react";
import "./Bookkeeper.css"
import MortgageCalculator from "./Calculators/MortgageCalculator";
import RetirementCalculator from "./Calculators/RetirementCalculator";
import StandardCalculator from "./Calculators/StandardCalculator";
import CashDragonLogo2 from "./CashDragonLogo2.png"
import Hoard from "./DragonsHoard"

export const Bookkeeper = () => {
    
    
    
    
    return (
        <div class="container-fluid">
        <font color="white">
    
    <div>

     <p></p>
     <Hoard />
     <MortgageCalculator />
     <RetirementCalculator />
     <StandardCalculator />
    </div>
    </font>
    </div>
    );
}