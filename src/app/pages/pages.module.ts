import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { AtomsModule } from '@atoms/atoms.module';
import { MoleculesModule } from '@molecules/molecules.module';
import { OrganismsModule } from '@organisms/organisms.module';
import { CategoryService } from '../core/services/category/category.service';

@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        HomeComponent,
        CategoriesComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule,
        AtomsModule,
        MoleculesModule,
        OrganismsModule,
    ],
	providers: [CategoryService],
    exports: [LoginComponent],
})
export class PagesModule {}
