import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list'
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule
];

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CdkTreeModule,
        ...MODULES
    ],
    exports: [
        ...MODULES
    ],
    providers: [],
})
export class MaterialModule { }
