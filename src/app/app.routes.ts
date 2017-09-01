import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddTipComponent } from './components/tips/add-tip/add-tip.component';
import { TipsComponent } from './components/tips/tips.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';

import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news/all', component: NewsComponent },
    { path: 'news/add', component: AddNewsComponent },
    { path: 'news/:id', component: NewsDetailsComponent },
    { path: 'tips/all', component: TipsComponent},
    { path: 'tips/add', component: AddTipComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [(RouterModule.forRoot(routes))],
    exports: [RouterModule]
})

export class AppRouterModule {}
