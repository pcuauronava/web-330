/*
===========================================
; Title: shopping-cart.js
; Author: Professor Krasso
; Date: 01 30 2023
; Modified by: Patrick Cuauro
; Description: shopping cart script file
===========================================
*/
import { Product } from "./product.js";
export class ShoppingCart {
    constructor(){
        // this.id = id;
        // this.name = name;
        // this.price = price;
        //this array should work as memory of the products added to the cart
        this.products = [];
        console.log(this.products[0]);
    }
    //this section is for add the element to the array (1)
    add(element) {
         this.products.push(element);
    }
    //this section is to print the table dynamically in the html page
    *[Symbol.iterator]() {
        for (let product of this.products) {
            yield product;
        }
    }
    count(){
        // try this with the parenthesis to check if it is necessary
        return this.products.length;
    } 
        //in the body of the function, add the product object to the products array
};