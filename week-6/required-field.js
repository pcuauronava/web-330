/*
===========================================
; Title: required-field.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
export class RequiredField{
    constructor(name,field){
        // set the parameters to class properties
        this.name = name;
        this.field = field;
    }
    validate(){
        this.field = true;
    }
    getMessage(){
        this.message = this.name + "is required field";
    }
}