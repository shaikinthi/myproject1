import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { service1Service } from '../service1.service';
import { Subscription } from 'rxjs';
import { interface1 } from '../interface1';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  })
  loginUser()
  {
    console.warn(this.loginForm.value)
  }
get user()
{
  return this.loginForm.get('user');
}
get password()
{
  return this.loginForm.get('password');
}


  disease='';
  symptoms='';

//   insertUser(item:any){


//     this.disease=item.name;
//     console.log(this.disease);
// }
//   
constructor(private Service:service1Service) {}

  Subscription:Subscription=new Subscription();
   User:interface1 ={
    username:'',
    password:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(form.value).subscribe(
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
        }
        
      )
      form.reset();
    }


}