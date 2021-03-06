import { Component, OnInit } from '@angular/core';
import { Account } from '../Classes/Account';
import { User } from '../Classes/User';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }

  ngOnInit(): void {
  }
  account = new Account();
  userid;
  userobj1;

  byuserId(userid) {
    this.userservice.getUserById(userid).subscribe(res => {
      console.log(res)
      this.userobj1 = JSON.stringify(res)
    })
  }

  updateuser(userid) {
    let userobj = new User();

    this.userservice.getUserById(userid).subscribe(res => {
      console.log(res)
      userobj = res
      console.log(userobj.id)
      this.account.AccNo = 2553
      this.account.AccType = "savings"
      this.account.balance = 50000
      userobj.accStatus = "active"
      userobj.account = this.account;
      this.userservice.updateUser(userobj.id, userobj).subscribe();

    })

  }


}
