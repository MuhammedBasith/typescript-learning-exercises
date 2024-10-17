"use strict";
class InsuranceCalculator {
    static calculatePremium(params) {
        let { age, type, healthConditions, coverageAmount } = params;
        let basePremium = 100;
        // Age factor
        if (age < 18) {
            basePremium += 50;
        }
        else if (age < 30) {
            basePremium += 20;
        }
        else if (age < 50) {
            basePremium += age * 1.5;
        }
        else {
            basePremium += age * 2;
        }
        // Type of insurance
        if (type === "life") {
            basePremium += 100;
        }
        else if (type === "health") {
            basePremium += 50;
        }
        // Health conditions
        if (healthConditions.includes("diabetes")) {
            basePremium += 200;
        }
        if (healthConditions.includes("hypertension")) {
            basePremium += 150;
        }
        if (healthConditions.includes("heart disease")) {
            basePremium += 300;
        }
        if (coverageAmount > 100000) {
            basePremium += (coverageAmount - 100000) * 0.01;
        }
        return basePremium;
    }
}
const insuranceParams = {
    age: 40,
    type: "health",
    healthConditions: ["diabetes"],
    coverageAmount: 150000,
};
const premium = InsuranceCalculator.calculatePremium(insuranceParams);
console.log(`Calculated Premium: ₹${premium}`);
