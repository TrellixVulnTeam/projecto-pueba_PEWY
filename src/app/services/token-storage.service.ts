import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const TOKEN_KEY = 'access';
const REFRESHTOKEN_KEY = 'refresh';
const USER_KEY = 'user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(
    private router: Router,
  ) { }
  signOut(): void {
    localStorage.clear();
    this.router.navigate(['login'])
  }
  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null{
    return localStorage.getItem(TOKEN_KEY);
  }
  public saveRefreshToken(token: string): void {
    localStorage.removeItem(REFRESHTOKEN_KEY);
    localStorage.setItem(REFRESHTOKEN_KEY, token);
  }
  public getRefreshToken(): string | null{
    return localStorage.getItem(REFRESHTOKEN_KEY);
  }
  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
      
    }
  }
}
