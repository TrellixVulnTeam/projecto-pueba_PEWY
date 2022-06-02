import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'content-type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}` + '/api/v1.0/token/login/',{
      username,
      password
    }, httpOptions);
  }
  refreshToken(token: string){
    return this.http.post(`${this.apiUrl}`+ '/api/v1.0/token/refresh/',{
      refresh: token
    }, httpOptions);
  };

}
