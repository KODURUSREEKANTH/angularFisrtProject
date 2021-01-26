import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuardAdmin } from './helperclases/auth.gaurd.Admin';
import { AuthGuard } from './helperclases/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TrnasactionStatusComponent } from './trnasaction-status/trnasaction-status.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ViewSelectedUserComponent } from './view-selected-user/view-selected-user.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'Registration', component:  UserRegistrationComponent },
  { path: 'dispalyUser', component: DisplayUserComponent  },
  { path: 'transactions', component: TransactionComponent  },
  { path: 'listTransactions', component: TrnasactionStatusComponent  },
  { path: 'admin', component: AdminPageComponent },
  { path: 'error', component:LoginComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'edit', component: EditUserComponent  },
  { path: 'view', component: ViewSelectedUserComponent},
  { path: '**', redirectTo: 'error' },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
