/*
===========================================
; Title: bill.js
; Author: Professor Krasso
; Date: 01 05 2023
; Modified by: Patrick Cuauro
; Description: Bill file acting as module.
===========================================
*/
export class Bill
{
    bills = [];
    constructor(_beverages, _appetizers, _mainCourses, _desserts)
    {
        this._beverages = _beverages;
        this._appetizers = _appetizers;
        this._mainCourses = _mainCourses;
        this._desserts = _desserts;
    }
    addBeverage(beverage)
    {
    this._beverages.push(beverage);
    }
    addAppetizer(appetizer)
    {
        this._appetizers.push(appetizer);
    }
    addMainCourse(mainCourse)
    {
        this._mainCourses.push(mainCourse);
    }
    addDessert(dessert)
    {
        this._desserts.push(dessert);
    }
}
function getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(addBeverage(item)
    {
        total += parseFloat(beverage.price);
    });
}
