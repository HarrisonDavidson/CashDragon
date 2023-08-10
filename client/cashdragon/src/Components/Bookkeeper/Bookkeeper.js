import React from "react";
import OldRedWizard from "./OldRedWizard.jpg"
import "./Bookkeeper.css"
import MortgageCalculator from "./Calculators/MortgageCalculator";
import RetirementCalculator from "./Calculators/RetirementCalculator";
import StandardCalculator from "./Calculators/StandardCalculator";

export const Bookkeeper = () => {
    
    
    
    
    return (
    <div style={{ backgroundImage: `url(${OldRedWizard})` }}>
        <h2>Welcome to the Bookkeeper!</h2>
     <p></p>
     <MortgageCalculator />
     <p></p>
     <RetirementCalculator />
     <p></p>
     <StandardCalculator />
    </div>
    );
}