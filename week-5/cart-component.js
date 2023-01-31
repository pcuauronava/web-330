/*
===========================================
; Title: cart-component.js
; Author: Professor Krasso
; Date: 01 30 2023
; Modified by: Patrick Cuauro
; Description: cart components script file
===========================================
*/
import { Product } from "./product";
export default class CartComponent extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = <i id="cartIcon" class="fa fa-shopping-cart"></i>(<span id="cart-count"></span>);
        }    
    };
// not completed
// function customElements.define()
// note: use this link for the example: https://www.geeksforgeeks.org/html-dom-customelements-define-method/
// it works for creating a new 