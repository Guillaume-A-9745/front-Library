import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  constructor() { }
  
  getToken(){
    let token = localStorage.getItem('token');    
    if(token){ 
      return JSON.parse(token); 
    }
  }
}
