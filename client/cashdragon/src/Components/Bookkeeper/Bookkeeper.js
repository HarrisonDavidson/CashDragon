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
    <div style={{ backgroundImage: `url(${CashDragonLogo2})` }}>
        <h2>Welcome to Cash Dragon!</h2>
     <p></p>
     <MortgageCalculator />
     <RetirementCalculator />
     <StandardCalculator />
     <Hoard />
    </div>
    </font>
    </div>
    );
}