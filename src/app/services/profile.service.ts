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
    return this.http.get(`${this.baseUrl}/`)}
}
