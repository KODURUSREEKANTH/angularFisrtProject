import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Classes/User';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  error = '';
  users: any = null;
  user = null;
  public currentUser: Observable<User>;
 

  constructor(private formBuilder: FormBuilder,
                     private router: Router,
                     private userServiceService:UserServiceService) { }

  get f() { return this.loginForm.controls; }

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.users = []

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.error = ''
    this.loading = true;
   
    this.userServiceService.getUsersLList().subscribe(res => {
      console.log(res)
      res.forEach(r => { this.users.push(r) })

      let user: User = this.users.find(x => x.emailId === this.f.username.value && x.password === this.f.password.value)
      // console.log(user)


      if (user) {
        if (user.accStatus == null || user.accStatus == "inactive") {
          this.loading = false;
          return this.error = 'your account is inactive'
        }
        this.userServiceService.setUserData(user);

        if (user.userRole == "USER") {

          localStorage.setItem('currentUser', JSON.stringify(user));

          this.router.navigate(['dispalyUser'])
        }
        if (user.userRole == "ADMIN") {
          console.log('i am in admin method')

          localStorage.setItem('currentUser', JSON.stringify(user));

          this.router.navigate(['admin'])
        }
      }
      if (user == null) {
        this.loading = false;
        return this.error = 'Username or password is incorrect'


      };
      this.loading = false;

    });
  }
  toRegister() {
    this.router.navigate(['Registration'])


  }
}
