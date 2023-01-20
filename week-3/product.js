/*
===========================================
; Title: product.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Product file acting as module.
===========================================
*/
//1) create a class named "Product" with parameters
//name and price
//class needs to be imported
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}