import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Classes/User';
import { AuthenticationService } from '../services/authentication.service';
import { TransactionService } from '../Services/transaction.service';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, 
     private usrservice:UserServiceService,private transactionservice:TransactionService) { }

  ngOnInit(): void {
  }
  userlist = null;

  trasactionlist=[]

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }



  getbyrole() {

    this.usrservice.getUserByrole().subscribe(res => {
console.log(res);
      this.userlist = []

      res.forEach((t, index) => {

        this.userlist.push(t);
         console.log(this.userlist)

      });

    })

  }


  getbystatus() {

    this.usrservice.getUserBystatus().subscribe(res => {

      this.userlist = []

      res.forEach((t, index) => {

        this.userlist.push(t);
        // console.log(JSON.stringify(this.trasactionlist))

      });

    })
  }


  getTransactionsbyfromAcc() {
    let cuser: User = JSON.parse(localStorage.getItem('currentUser'));

    this.trasactionlist = [];
    this.transactionservice.getTransactionsByfromAccNo(cuser.account.AccNo).subscribe(res => {

      res.forEach((t, index) => {
        //console.log(this.trasactionlist)

        this.trasactionlist.push(t);

      });
    });
  }

 

}
