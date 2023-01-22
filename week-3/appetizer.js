/*
===========================================
; Title: appetizer.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Appetizer file acting as module.
===========================================
*/
//Import statement from the product object
//class "Appetizer" created
//parameters added
//pass to the parent class
//using super
//export the class
import Product from "./product.js";

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}