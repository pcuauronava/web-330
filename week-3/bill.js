/*
===========================================
; Title: bill.js
; Author: Professor Krasso
; Date: 01 05 2023
; Modified by: Patrick Cuauro
; Description: Bill file acting as module.
===========================================
*/
//class "Bill" created
//properties added
//bill variable declared as an empty array
//all the elements have to be pushed in the arrays
//including beverage, appetizer, mainCourse and dessert
//function "addAppetizer" created with parameter beverage
//function "addMainCourse" created with parameter mainCourse
//function "addDessert" created with parameter dessert
let bills = [];
export class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = _beverages;
        this._appetizers = _appetizers;
        this._mainCourses = _mainCourses;
        this._desserts = _desserts;
    }
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }
    addDessert(dessert) {
        this._desserts.push(dessert);
    }
}
function getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(addBeverage(item))
    {
        total += parseFloat(beverage.price);
    }
}
