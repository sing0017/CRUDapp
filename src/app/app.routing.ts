import{RouterModule} from '@angular/router';
import{UsersComponent} from './user.component';
import{UserFormComponent} from './user-form.component';
import {LoginComponent} from './login.component';
import {SignupComponent} from './signup.component';
import {AuthGuard} from './auth.guard';

export const routing = RouterModule.forRoot([
    {path:'', component:UsersComponent, canActivate:[AuthGuard]},
    {path:'add', component:UserFormComponent ,canActivate:[AuthGuard]},
    {path:'add/:id', component:UserFormComponent ,canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},
    {path:'login/:invalidLoginMessage', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'signup/:invalidLoginMessage', component:SignupComponent}


]);