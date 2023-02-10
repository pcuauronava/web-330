/*
===========================================
; Title: finance-calculator.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
class FinanceCalculator{
    static MONTHS_IN_YEAR = 12;
    month =this.years*MONTHS_IN_YEAR;
    calculateFutureValue(monthlyPayment, rate, years){

    
    }
    interestRate = 1 + rate /100;
    presentValue = monthlyPayment*this.month;
    futureValue = (Math.pow(interestRate,month));
    return Math.ceil(futureValue,2);

    static convertToCurrency(field){
        currencyFormatter = new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});
    }
    return currencyFormatter.format(field);
}