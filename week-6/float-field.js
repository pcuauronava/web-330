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
    if(this.field ==!isNaN(parseFloat(field))){
        return true;
        }
    }
    getMessage(){
        return this.name + "must be a float value. You entered" + this.field;
    }
}