/*
===========================================
; Title: main-course.js
; Author: Professor Krasso
; Date: 01 17 2023
; Modified by: Patrick Cuauro
; Description: Main course file acting as entry.
===========================================
*/
//Class "MainCourse" created
//Product object inherited
//parameters created
//passed them to the parent class
//using super
//class exported
import { Product } from "./product";

export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
