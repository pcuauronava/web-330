/*
===========================================
; Title: dessert.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Dessert file  file acting as module.
===========================================
*/
import { Product } from "./product";

export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}
