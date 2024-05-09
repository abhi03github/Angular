

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    constructor(private router:Router){

    }
    ngOnInit():void{

    }
    user_records:any[]=[];
    data={
      name:"",
      email:"",
      mobile:"",
      password:""
    }
    doregistration(Values:any){
      // alert("Hello");
      //this.user_records=JSON.parse(localStorage.getItem('users') || '{}');
      if(this.user_records.some((v)=>{
        return v.email==this.data.email 
      })) {
        alert("Email already registered....");
      }
      else{
        this.user_records.push(this.data)
        localStorage.setItem("users",JSON.stringify(this.user_records));
        alert("Hello"+" "+  this.data.name +" " +"is Successfully registered");
      }
    }
}

