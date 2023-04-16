import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookcus } from './roombooking';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookpostService {
 
  private url = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any>{
    return this.httpClient.get(this.url + '/posts')  
  }

  create(post: Bookcus): Observable<any> {
    return this.httpClient.post(this.url + '/posts', post) 
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.url + '/posts/' + id)
  }

  update(id: number, post: Bookcus): Observable<any> {
    return this.httpClient.put(this.url + '/posts', post)
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/posts/' + id)
  }
}
