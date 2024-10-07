import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrganismsModule } from '@organisms/organisms.module';
import { AtomsModule } from '@atoms/atoms.module';
import { PagesModule } from './pages/pages.module';
import { CategoryService } from './core/services/category/category.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AtomsModule,
        OrganismsModule,
        HttpClientModule,
        PagesModule,
    ],
    exports: [AtomsModule],
    providers: [CategoryService],
    bootstrap: [AppComponent],
})
export class AppModule {}
