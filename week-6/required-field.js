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
        //remember to compare with an empty string
        if(this.field !== ""){
            return true;
        } else {
            return false;
        }
    }
    getMessage(){
        return `${this.name}  is required field.`;
    }
}