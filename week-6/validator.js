/*
===========================================
; Title: validator.js
; Author: Professor Krasso
; Date: 02 06 2023
; Modified by: Patrick Cuauro
; Description: Future Value app script
===========================================
*/
import { RequiredField } from "./required-field";
import { FloatField } from "./float-field";
import { FloatMinField } from "./float-min-field";
import { FloatMaxField } from "./float-max-field";
let validators = [];
let messages = [];
class Validator{
    addRequiredField(max){
        this.validators.push(new RequiredField(this.name,this.field,max))
    }
    addRequiredFloatField(max){
        this.validators.push(new FloatField(this.name,this.field,max))
    }
    addRequiredFloatMinField(max){
        this.validators.push(new FloatMinField(this.name,this.field,max))
    }
    addRequiredFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name,this.field,max))
    }
    validate(){
        for (const fields of validators) {
            if(){
                iterate;
            }            
        }
        return true;
    }
}

validate(){
    for (let i of validator){
        i.validate();
        if (false){
            messages.push(getMessage(i));
        }
    }
    return true;
}