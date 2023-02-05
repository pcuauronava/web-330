/*
===========================================
; Title: product.js
; Author: Professor Krasso
; Date: 01 30 2023
; Modified by: Patrick Cuauro
; Description: product script file
===========================================
*/
export class Product {
    constructor(id ,name, price) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.price = price;
    }
};