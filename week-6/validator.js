/*
===========================================
; Title: validator.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator{
    //in this case the arrays goes inside the class. remember "class properties"
    validators = [];
    messages = [];
    
    constructor(name,field){
        this.name = name;
        this.field = field;
    }
    //verify this setting a breakpoint
    addRequiredField(){
        this.validators.push(new RequiredField(this.name,this.field));
    }
    addRequiredFloatField(){
        this.validators.push(new FloatField(this.name,this.field));
    }
    addFloatMinField(min){
        this.validators.push(new FloatMinField(this.name,this.field, min));
    }
    addFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name,this.field, max));
    }
    validate(){
        //use let instead of const, don't forget the "this" keyword
        for (let item of this.validators) {
            if(item.validate() === false) {
                this.messages.push(item.getMessage());
                return false;
            }            
        }
        return true;
    }
}