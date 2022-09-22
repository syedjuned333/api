import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 public signupForm!:FormGroup

  constructor(private FormBuilder:FormBuilder, private http:HttpClient,private Router:Router) { }

  ngOnInit(): void {
  this.signupForm=this.FormBuilder.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    password:[''],
    ConfirmPassword:[''],
  })
  }
  signup()
{
  this.http.post<any>("http://localhost:3000/SignUpUsers",this.signupForm.value)
  .subscribe(res=>{
    alert("signup succesful");
    this.signupForm.reset;
    this.Router.navigate(['login']);
  

  },err=>{
    alert('something went wrong')
  })
}}
