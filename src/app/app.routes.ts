import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddTipComponent } from './components/tips/add-tip/add-tip.component';
import { TipsComponent } from './components/tips/tips.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tips/all', component: TipsComponent},
    { path: 'tips/add', component: AddTipComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [(RouterModule.forRoot(routes))],
    exports: [RouterModule]
})

export class AppRouterModule {}
