import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../Classes/User';
import { UserServiceService } from '../Services/user-service.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  currentUser: User;
  isclicked;
  sub: Subscription;

  constructor(private userService: UserServiceService, private authenticationService: AuthenticationService, private router: Router, private activateRouter: ActivatedRoute) {
    //this.currentUser = userService.getUserData();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(this.currentUser)


    this.isclicked = false 
  }

  ngOnInit(): void {
  }
  @Input() user: User



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
