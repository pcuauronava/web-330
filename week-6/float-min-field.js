/*
===========================================
; Title: float-min-field.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
export class FloatMinField{
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate(){
        parseFloat(this.field);
        if (this.field>this.min){
            return true;
        } else {
            return false;
        }
    }
    getMessage(){
        return this.name + "must be more than" + this.min + "you entered" + this.field;
    }
}