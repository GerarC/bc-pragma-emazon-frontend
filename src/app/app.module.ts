import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrganismsModule } from '@organisms/organisms.module';
import { AtomsModule } from '@atoms/atoms.module';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AtomsModule, OrganismsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
