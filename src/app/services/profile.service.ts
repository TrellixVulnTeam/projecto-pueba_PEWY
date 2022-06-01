import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const apiURL =`${environment.apiURL}/api/v1.0/users`;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl= `${apiURL}/User`;
  constructor(private http: HttpClient) { }
  all():Observable<any> {
    return this.http.get(`${this.baseUrl}/`)
  }
  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/`)
  }
  save(object: any): Observable<any> {
     return this.http.post(`${this.baseUrl}`, object)
  }
  resend_email(object: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/resend_email/`, object);
  }
  forgot_password(object: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/forgot_password/`, object);
  }
  saveRegister(object: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Register/`, object);
  }
  filter (url: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/?${url}`)
  }

  patch (object: any, id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}/`, object);
  }
  delete (id: number){
    return this.http.delete(`${this.baseUrl}/${id}/`);
  }
  getProfileByUserId (id: number){
    return this.http.get(`${this.baseUrl}/getProfileByUser/${id}/`)
  }
}

