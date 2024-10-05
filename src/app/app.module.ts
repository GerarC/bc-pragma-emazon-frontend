import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AtomsModule } from './shared/components/atoms/atoms.module';
;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AtomsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
