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
//step b class CalorieConverter with a variable called data
//and populate it with 6 FoodModel objects. see table
import FoodModel from "./food-model.js";
//step d export the class
export class CalorieConverter {
    static data = [
        //make sure this is ok
        //Arrays can not be named with "="
        new FoodModel("1007", "Egg", 78),
        new FoodModel("1008", "Apple", 95),
        new FoodModel("1009", "Hamburger", 354),
        new FoodModel("1010", "Fries", 400),
        new FoodModel("1011", "Banana", 105),
        new FoodModel("1012", "Soda", 150),
    ];
    //step c create a static function named find
    //with a single string parameter
    //make sure this is ok
    static find(elementName) {
        //personal note: remember to check which methods apply
        //the strings, objects, etc.
        // console.log(foodTable);
        //This results also have to be converted to lower case
        //to match the search
        let result = this.data.filter(dat => dat.name.toLowerCase() == elementName);
        // console.log(result);
        return result;
    };
};
