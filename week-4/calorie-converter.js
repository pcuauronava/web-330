/*
===========================================
; Title: calorie-converter.js
; Author: Professor Krasso
; Date: 01 23 2023
; Modified by: Patrick Cuauro
; Description: Calorie script file
===========================================
*/
//step a import statement to the FoodModel
//tep b class CalorieConverter with a variable called data
//and populate it with 6 FoodModel objects. see table
import FoodModel from "./food-model";
//step d export the class
export class CalorieConverter {
    static data = [
        //make sure this is ok
        Egg = new FoodModel("1007", "Egg", 78),
        Apple = new FoodModel("1008", "Apple", 95),
        Hamburger = new FoodModel("1009", "Hamburger", 354),
        Fries = new FoodModel("1010", "Fries", 400),
        Banana = new FoodModel("1011", "Banana", 105),
        Soda = new FoodModel("1012", "Soda", 150),
    ];
    //step c create a static function named find
    //with a single string parameter
    //make sure this is ok
    static find(id) {
        let result = this.data.filter(dat => data.name == "Egg");
        console.log(result);
    };
};