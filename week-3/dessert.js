/*
===========================================
; Title: dessert.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Dessert file  file acting as module.
===========================================
*/
//class "Dessert" (typo in instructions) created
//inherited Product object
//parameters added
//passed to the parent class
//using super
//exported
import { Product } from "./product";

export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
