import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesComponent } from './pages/dashboard/categories/categories.component';
import { HomeComponent } from './pages/dashboard/home/home.component';

const routes: Routes = [
    {
        path: 'login',
        title: 'Emazon',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        title: 'Emazon',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'categories',
                title: 'Categories',
                component: CategoriesComponent,
            },
        ],
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
