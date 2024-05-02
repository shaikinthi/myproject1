import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { service2Service } from '../service2.service';
import { Subscription } from 'rxjs';
import { inter2 } from '../inter2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  })
  ReginUser()
  {
    console.warn(this.RegisterForm.value)
  }
get user()
{
  return this.RegisterForm.get('user');
}
get password()
{
  return this.RegisterForm.get('password');
}



  constructor(private Service:service2Service) {}

  Subscription:Subscription=new Subscription();
   User:inter2 ={
    name:'',
    gmail:'',
    password:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Insert(Form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(Form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Inserted Succesfully"

          }
          else{
            console.log("Failed");
            alert("Unique constraint error");
            this.ErrorMsg="User Already Exists"

          }
          Form.reset();


        }
        
      )
    }



}
