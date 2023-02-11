/*
===========================================
; Title: float-field.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
export class FloatField{
    constructor(name,field){
        this.name = name;
        this.field = field;
    }
    validate(){
    //test
    if(!Number.isNaN(parseFloat(this.field))){
        return true;
        } else {
            return false;
        }
    }
    getMessage(){
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
}