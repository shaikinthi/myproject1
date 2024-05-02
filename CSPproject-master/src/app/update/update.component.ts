import { Component } from '@angular/core';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from '../inter';
import {Subscription} from 'rxjs';
import { cspserviceService } from '../cspservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  canShowData:boolean=false;
  constructor(private Service:cspserviceService) {}
   ngOnInit() {
   }
   Subscription:Subscription=new Subscription();
   User:inter ={
    id:'',
      name:'',
      hand_washing:'',
      
      using_soap:'',
      brushing:'',
      clean_surroundings:''
      
    };
    SuccessMsg='';
    ErrorMsg='';
    a=[];
    Read() {
     this.Subscription = this.Service.Read(this.User.id).subscribe(
           (data)=>{
             if(data){
                 this.canShowData=true;
                 console.log(data);
                 this.a=data.Result[0];
                 this.User ={
                   id:this.a[0],
                   name:this.a[1],
                   hand_washing:this.a[2],
                   using_soap:this.a[3],
                   brushing:this.a[4],
                   clean_surroundings:this.a[5]
                   
                   
                   
                   
                  };
                 console.log(data.Result);
                 console.log(this.a);
 
               }
             else{
                 console.log("Failed");
               }
            }
         )
     }
     ngOnDestroy() {
       this.Subscription.unsubscribe();
     }
     
 
   
    Update(){
     this.ErrorMsg='';
     this.SuccessMsg='';
        this.Subscription = this.Service.Update(this.User.id,this.User).subscribe(
         (data)=>{
           if(data){
             console.log(data);
             this.SuccessMsg="Updated Succesfully"
 
           }
           else{
             console.log("Failed");
             this.ErrorMsg="Failed Updating"
           }
         }
       )
     }
 
   }
 
