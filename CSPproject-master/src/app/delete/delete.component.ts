import { Component } from '@angular/core';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from '../inter';
import {Subscription} from 'rxjs';
import { cspserviceService } from '../cspservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
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

   Delete() {
    this.SuccessMsg='';
    this.ErrorMsg='';
    this.Subscription = this.Service.Delete(this.User.id).subscribe(
           (data)=>{
            if(data){
              console.log(data);
              this.SuccessMsg="Deleted Succesfully"
            }
            else{
              console.log("Failed");
              this.ErrorMsg="failed Deleting"
            }
          }
             )
            }
    }
