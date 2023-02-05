/*
===========================================
; Title: cart-component.js
; Author: Professor Krasso
; Date: 01 30 2023
; Modified by: Patrick Cuauro
; Description: cart components script file
===========================================
*/
// not completed
// import product from the other file 
// import { Product } from "./product";
// import {shoppingCart} from "./shopping-cart"
class CartComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i>(<span id="cart-count"></span>)`;    
    }
};
customElements.define('cart-component', CartComponent);




















// export default class CartComponent extends HTMLElement {
//     constructor(){
//         super();
//     }
//     connectedCallback(){
//         this.innerHTML = '<i id="cartIcon" class="fa fa-shopping-cart"></i>(<span id="cart-count">2</span>)';
//     }
// };

//receive a data from the html first

// let shoppingCart = document.getElementById("shoppingCart");


//the following example creates a functions with a class inside that attaches the table and values
//in html tags to the document
// export function testDefMethod(){
//     class CustomEl extends HTMLElement {
//         constructor() {
//             super();
//             this.attachShadow({ mode: 'open' });
//             this.shadowRoot.innerHTML =
//                 `<table><tr><th>ID</th><th>Name</th><th>Price</th></tr><tr><td>value1</td><td>value2</td><td>value3</td></tr></table>`;
//         }
//     }
//     window.customElements.define('table-filler', CustomEl);
// };        

// function customElements.define()
// note: use this link for the example: https://www.geeksforgeeks.org/html-dom-customelements-define-method/
// it works for creating a new 