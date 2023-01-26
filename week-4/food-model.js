/*
===========================================
; Title: food-model.js
; Author: Professor Krasso
; Date: 01 23 2023
; Modified by: Patrick Cuauro
; Description: Food model script file
===========================================
*/
//step b class named FoodModel with constructor
//step c parameters: id, name, calories. initialize?
//step d export class
export class FoodModel {
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
};
//this would only work if the class is not exported
//hint: delete export from the beginning of class
//let newFood1 = new FoodModel("1020", "Pizza", 3000);
//console.log(newFood1);