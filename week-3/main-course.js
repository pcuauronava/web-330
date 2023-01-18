/*
===========================================
; Title: main-course.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Main course file acting as entry.
===========================================
*/
import { Product } from "./product";

export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}
