/*
===========================================
; Title: appetizer.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Appetizer file acting as module.
===========================================
*/
import { Product } from "./product";

export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}