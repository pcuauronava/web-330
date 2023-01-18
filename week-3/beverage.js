/*
===========================================
; Title: beverage.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Beverage file acting as module.
===========================================
*/
import { Product } from "./product";

export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}
