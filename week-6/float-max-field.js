/*
===========================================
; Title: float-max-field.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
export class FloatMaxField{
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }
    validate(){
        if(parseFloat(this.field) < this.max){
            return true;
        } else {
            return false;
        }
        // previous error
        // parseFloat(this.field);
        // if(this.field<this.max){
        //     return true;
        // } else {
        //     return false;
        // }
    }
    getMessage(){
        return `${this.name} must be less than ${this.max}. You Entered ${this.field}`;
    }
}