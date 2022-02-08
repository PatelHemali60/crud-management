import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationModule } from './Modules/form-validation/form-validation.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormValidationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
