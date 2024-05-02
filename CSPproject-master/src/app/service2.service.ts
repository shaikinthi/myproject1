import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {inter2,UniqueConstraintError,InsertedSuccess ,Read} from './inter2';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class service2Service {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3000/';

  Insert(
    Details:inter2
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'register1/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(gmail:string):Observable<InsertedSuccess>{
    console.log(`${this.url}register1/Read${gmail}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}register1/Read${gmail}`
    );
  }
  
  Delete(gmail:string):Observable<InsertedSuccess>{
    console.log(`${this.url}register1/Delete${gmail}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}register1/Delete${gmail}`
    );
  }
  Update(
    gmail:string,Details:inter2) {
    return this.http.put(`${this.url }register1/Update${gmail}`,Details,{headers:this.headers}
    );
}
}

