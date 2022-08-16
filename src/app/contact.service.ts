import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
  public get(): Observable<any> {
    return this.http.get(API_URL).pipe(map(res => res));
  }
}
