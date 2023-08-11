import React from "react";
import OldRedWizard from "./OldRedWizard.jpg"
import "./Bookkeeper.css"
import MortgageCalculator from "./Calculators/MortgageCalculator";
import RetirementCalculator from "./Calculators/RetirementCalculator";
import StandardCalculator from "./Calculators/StandardCalculator";
import CashDragonLogo2 from "./CashDragonLogo2.png"

export const Bookkeeper = () => {
    
    
    
    
    return (
        <font color="white">
    <div style={{ backgroundImage: `url(${CashDragonLogo2})` }}>
        <h2>Welcome to the Bookkeeper!</h2>
     <p></p>
     <MortgageCalculator />
     <p></p>
     <RetirementCalculator />
     <p></p>
     <StandardCalculator />
    </div>
    </font>
    );
}