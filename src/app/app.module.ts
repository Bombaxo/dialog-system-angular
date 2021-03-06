import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicMatDialogModule } from './shared/dynamic-overlay-container/dynamic-overlay.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { DialogMessageComponent } from './shared/dialog/dialog-message/dialog-message.component';
import { ExampleFormComponent } from './examples/example-form/example-form.component';
import { ExampleReportComponent } from './examples/example-report/example-report.component';
import { ExampleAvailableTimeComponent } from './examples/example-available-time/example-available-time.component';
import { ExampleSubcriptionComponent } from './examples/example-subcription/example-subcription.component';

const COMMON = [
  DialogComponent,
  ExampleFormComponent,
  ExampleReportComponent,
  ExampleAvailableTimeComponent,
  ExampleSubcriptionComponent
];
@NgModule({
  declarations: [
    AppComponent,
    DialogMessageComponent,
    ...COMMON
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    DynamicMatDialogModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ...COMMON
  ],
  exports: [
    ...COMMON
  ]
})
export class AppModule { }
