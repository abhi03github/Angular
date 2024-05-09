import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private router:Router
  ){}
  ngOnInit():void{
  }
  user_records:any[]=[];
    data1={
      email:"",
      password:""
    }
  
  dologin(Values:any){
    this.user_records=JSON.parse(localStorage.getItem('users') || '{}');
    if(this.user_records.some((v)=>{
      return v.email==this.data1.email && v.password==this.data1.password
    })) {
      alert("Login Successfully");
      this.router.navigate(['/profile'])
    }
    else{
      alert("login Failed");
    }
  }
}
