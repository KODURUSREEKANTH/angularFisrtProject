import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserServiceService } from './Services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayUserComponent } from './display-user/display-user.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TrnasactionStatusComponent } from './trnasaction-status/trnasaction-status.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AuthenticationService } from './services/authentication.service';
import { TransactionService } from './Services/transaction.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoTransactionComponent } from './do-transaction/do-transaction.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewSelectedUserComponent } from './view-selected-user/view-selected-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    DisplayUserComponent,
    TransactionComponent,
    TrnasactionStatusComponent,
    AdminPageComponent,
    AdminviewComponent,
    PageNotFoundComponent,
    DoTransactionComponent,
    AddAccountComponent,
    EditUserComponent,
    ViewSelectedUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserServiceService,AuthenticationService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
