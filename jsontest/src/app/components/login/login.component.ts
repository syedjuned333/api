import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public loginform!:FormGroup
  constructor(private FormBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.FormBuilder.group({
      email:[''],
      password:[''],
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/SignUpUsers")
    .subscribe(res=>
      {
        
        const user=res.find((a:any)=>{
          return a.email=== this.loginform.value.email && a.password===this.loginform.value.password
        });
        if(user){
          alert('login successful');
          this.loginform.reset;
          this.router.navigate(['home']);
        }
        else{
          alert('user not found');
        }
      },err=>
      {
        alert('somethimg went wrong');
      })
    

  }
}
