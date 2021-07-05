import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { DialogMessageComponent } from './shared/components/dialog/dialog-message/dialog-message.component';
import { ExampleFormComponent } from './shared/components/example-form/example-form.component';
import { ExampleReportComponent } from './shared/components/example-report/example-report.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogMessageComponent,
    ExampleFormComponent,
    ExampleReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ExampleFormComponent,
    ExampleReportComponent
  ]
})
export class AppModule { }
