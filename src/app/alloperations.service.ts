import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlloperationsService {

  url: string = "http://localhost:3000/Users/";

   notify = new BehaviorSubject('');

  constructor(
    private http: HttpClient
  ) { }
  
  sendNotification(message){
    return this.notify.next(message);
  }

  getNotification(): Observable<any>{
    return this.notify.asObservable();
  }

 

  allusers(): Observable<any>{
    return this.http.get(this.url);
  }

  adduser(data): Observable<any>{
    return this.http.post(this.url, data);
  }

  deleteuser(Id): Observable<any>{
    return this.http.delete(this.url + Id );
  }

  edituser(id, data): Observable<any>{
    return this.http.put(this.url + id, data);
  }
}
