import { Component } from '@angular/core';
import {
  InsertedSuccess,
  inter,
  UniqueConstraintError,
  Read
} from '../inter';
import { Subscription } from 'rxjs';
import { cspserviceService } from '../cspservice.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})




export class ViewComponent {
  i: any; 
  constructor(private Service: cspserviceService) {}
  
  Subscription: Subscription = new Subscription();
  User: inter= {
    id:'',
      name:'',
      hand_washing:'',
      
      using_soap:'',
      brushing:'',
      clean_surroundings:''
      
  };  
  d = [];  
  d1 = [];   
  d2 = [];
  canShowData=false;
  match = false;
  match1 = false;
  hide=false;
 
  SuccessMsg = '';
  ErrorMsg = '';
  Close(){
    this.hide=true;
  }
  
  ReadAll(Detail:string) { 
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Read(Detail).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.id} not Exists`;
        } else {
          this.d = Data.Result;  
          console.log(this.d);
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }  
  Get(i:any){
    const id = i[0];
    this.canShowData=false;
    this.Subscription = this.Service.Read(id).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.id} not Exists`;
        } else {
    
          this.d2 = Data.Result;   
          this.User.id = this.d2[0][0];
          this.User.name= this.d2[0][1]; 
          this.User.hand_washing= this.d2[0][2];  
          this.User.using_soap= this.d2[0][3];  
          this.User.brushing= this.d2[0][4];  
          this.User.clean_surroundings= this.d2[0][5];   
          this.match1 = true;  
          this.match = false; 
          this.hide=false;
          
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  Update(){
    this.SuccessMsg = '';
      this.ErrorMsg = ''; 
      //this.hide=false;

      const Data = {
        id: this.User.id,
        name: this.User.name,
        hand_washing: this.User.hand_washing,
        using_soap: this.User.using_soap,
        brushing: this.User.brushing,
        clean_surroundings: this.User.clean_surroundings,
        
      };
        
      this.Subscription = this.Service.Update(this.User.id,Data).subscribe({
        next: (data: any) => {
          console.log(`Updated values: id=${this.User.id}, name=${this.User.name},hand_washing=${this.User.hand_washing},using_soap=${this.User.using_soap},brushing=${this.User.brushing},clean_surroundings=${this.User.clean_surroundings}`);
          this.SuccessMsg = `Updated data for id ${this.User.id} successfully`;  
           //this.close(); 
          this.match1 = true;  
          this.match = false; 
          //this.hide=false;
          this.ReadAll('All');
        },
        error: (error: any) => {
          console.log(error)
          //this.hide=false;
          this.ErrorMsg = '';
        }
      })
  }
  Read(i:any) {  
    const id = i[0];
    this.ErrorMsg = '';
    this.SuccessMsg = '';
  
    this.Subscription = this.Service.Read(id).subscribe({
      next: (Data: Read) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.id} not Exists`;
        } else {
          this.match = true;  
          this.match1 = false;  
          this.d1 = Data.Result; 
          this.hide=false;
          console.log(this.d1)
          
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }

  Delete(i:any) { 
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShowData=true;
    const id = i[0];
    this.Subscription = this.Service.Delete(id).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.id} not Exists`;
        } else {
          this.SuccessMsg = `${this.User.id} Deleted Succesfully`;
          this.ReadAll('All');
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }



  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}