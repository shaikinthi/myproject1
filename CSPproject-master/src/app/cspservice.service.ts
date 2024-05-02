import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from './inter';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class cspserviceService {
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3000/';

  Insert(
    Details:inter
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'hygiene/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(id:string):Observable<InsertedSuccess>{
    console.log(`${this.url}hygiene/Read${id}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}hygiene/Read${id}`
    );
  }
  
  Delete(id:string):Observable<InsertedSuccess>{
    console.log(`${this.url}hygiene/Delete${id}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}hygiene/Delete${id}`
    );
  }
  Update(
    id:string,Details:inter) {
    return this.http.put(`${this.url }hygiene/Update${id}`,Details,{headers:this.headers}
    );
}
}
