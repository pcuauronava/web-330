/*
===========================================
; Title: http-client.js
; Author: Professor Krasso
; Date: 02 21 2023
; Modified by: Patrick Cuauro
; Description: http-client script
===========================================
*/
export default class HttpClient {
    async get(url,params) {
        this.params = "";
        url = new URL(url);
        url.search = new URLSearchParams(params);
        //declared as const to keep the value        
        const res = await fetch(url.toString(),{
        method:"GET"          
        });
        return res.json();
    }  
}

// export function get(){
//     let response = fetch('https://openlibrary.org/api/books');
// let data = response.tostring();
// return data;
// }