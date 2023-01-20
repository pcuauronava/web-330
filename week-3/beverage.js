/*
===========================================
; Title: beverage.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Beverage file acting as module.
===========================================
*/
//2) class created named "Beverage"
//import the statement from Product
//inherit the base classes properties
//parameters for the constructor
//pass the parameters to the parent
//using super
//export
import { Product } from "./product";

export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
