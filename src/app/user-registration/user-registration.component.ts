import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Classes/User';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  submitted = false;

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    emailId: ['', Validators.required],
    phoneNo: ['', Validators.required],
    gender: ['', Validators.required],
    password: ['', Validators.required],
    
   
  });
  get f() { return this.profileForm.controls; }
  private user = new User();
  onSubmit() {
    this.submitted = true;

    //console.log(this.profileForm);
    this.user = this.profileForm.value;
    this.user.accStatus = "inactive";
    this.user.userRole = "USER"
    // console.log(this.profileForm.value);

    this.userService.createUser(this.user).subscribe(res => {
      // localStorage.setItem('user', JSON.stringify(this.user));
      console.log("------UserCreated--------------");

      console.log(JSON.stringify(res));

    })
    this.profileForm.reset();
     this.toLogin();

  }
  users: any = null;
  gtusr() {
    this.users = [];

    this.userService.getUsersLList().subscribe(res => {

      res.forEach((us) => this.users.push(us));
      console.log(this.users)
      let user = this.users.find(x => x.emailid === "sai@gmail.com" && x.password === "sai")
      console.log(user)
    })
  }


  toLogin() {

    this.router.navigate(['login']);
  }


}
