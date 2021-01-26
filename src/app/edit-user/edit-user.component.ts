import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../Classes/Account';
import { User } from '../Classes/User';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
user:User;
  constructor(private us: UserServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getone();
  }

  getone() {
    this.route.queryParams.subscribe(res => {
      console.log(res.id + "id")
      this.id = res.id;
      this.us.getUserById(this.id).subscribe(r => {
        this.user = r
        console.log(this.user)

      })
    })

  }

  id: number;
  selectedItem = '';
  accno;
  items = ["Savings", "reccuring", "current"];
  selected() { }

  update() {
    let userobj = new User();
    userobj = this.user
    console.log(this.selectedItem)
    console.log(this.user);
    let acc = new Account();
    if(this.accno==null||this.selectedItem==''){
alert("Account number or Account type cannot be empty")
      return;
    }

    acc.AccNo = this.accno
    acc.AccType = this.selectedItem
    acc.balance = 0
    this.user.account = acc
    this.user.accStatus = "active"
    this.user.account.balance = 0;
    this.us.updateUser(this.user.id, this.user).subscribe(res => console.log(res));
    this.router.navigate(['admin'])

  }

}
