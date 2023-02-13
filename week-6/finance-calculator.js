/*
===========================================
; Title: finance-calculator.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
export class FinanceCalculator{
    static MONTHS_IN_YEAR = 12;
    
    static calculateFutureValue(monthlyPayment, rate, years){
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate/100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate,months))/10;
        return futureValue.toFixed(2);
    }
    static convertToCurrency(field){
        let currencyFormatter = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD",
        });
        return currencyFormatter.format(field);
    }
}