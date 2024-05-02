import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {interface1,UniqueConstraintError,InsertedSuccess ,Read} from './interface1';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class service1Service {
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3000/';

  Insert(
    Details:interface1
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'login/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(username:string):Observable<InsertedSuccess>{
    console.log(`${this.url}login/Read${username}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}login/Read${username}`
    );
  }
  
  Delete(username:string):Observable<InsertedSuccess>{
    console.log(`${this.url}login/Delete${username}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}login/Delete${username}`
      );
    }
    Update(
      username:string,Details:interface1) {
      return this.http.put(`${this.url }login/Update${username}`,Details,{headers:this.headers}
      );
  }
  }
