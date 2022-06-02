import { Component,  OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { 
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
}from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  submit()  {
    if (!this.form.valid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor verifique que los datos sean correctos.',
        icon: 'error',
        cancelButtonText:'Reintentar'
      });
    } else {
      this.login();
    }
  }

  login() {
    const email = this.form.get('username')?.value.toLowerCase();
    const password = this.form.get('password')?.value;
    if (email != '' && password != '') {
      this.authService.login(email, password).subscribe({
        next: (resp: any) => {
          this.tokenService.saveToken(resp.access);
          this.tokenService.saveRefreshToken(resp.refresh);
          this.tokenService.saveUser(resp.user);
          this.router.navigate(['/home']);
        },
        error: (err: any) => {
          console.log(err);
        },
      }); 
    }
  }

}