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
export class Bill {
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
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
    getTotal() {
        let total = 0;
        let beverageTotal = this._beverages.forEach(function (beverage) {
            total += parseFloat(beverage.price);
        })
        let appetizerTotal = this._appetizers.forEach(function (appetizer) {
            total += parseFloat(appetizer.price);
        })
        let mainCourseTotal = this._mainCourses.forEach(function (mainCourse) {
            total += parseFloat(mainCourse.price);
        })
        let dessertTotal = this._desserts.forEach(function (dessert) {
            total += parseFloat(dessert.price);
        })
        return total;
    }
}