import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { DialogMessageComponent } from './shared/components/dialog/dialog-message/dialog-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
