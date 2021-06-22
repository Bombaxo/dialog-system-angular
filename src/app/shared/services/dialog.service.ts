import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogConfig, DialogContent, DialogResponse } from '../interfaces/dialog.interface';

@Injectable({
    providedIn: 'root',
})
export class DialogService {

    dialogRef: MatDialogRef<DialogComponent>;
    private defaultDialog: DialogConfig = {
        showCloseIcon: false,
        templateType: 'component',
        matDialogConfig: {
            panelClass: 'ui-dialog',
            disableClose: false,
            autoFocus: false,
            hasBackdrop: true,
            closeOnNavigation: true,
            width: 'auto',
            height: 'auto'
        }
    };

    constructor(
        private dialog: MatDialog,
    ) { }

    open(dialogConfig: DialogConfig): MatDialogRef<DialogComponent> {
        const dialogOptions = {
            ...this.defaultDialog,
            ...dialogConfig,
            matDialogConfig: {
                ...this.defaultDialog?.matDialogConfig,
                ...dialogConfig?.matDialogConfig
            }
        };

        this.dialogRef = this.dialog.open(DialogComponent, dialogOptions.matDialogConfig);
        this.dialogRef.componentInstance.showCloseIcon = dialogOptions.showCloseIcon;
        this.dialogRef.componentInstance.templateType = dialogOptions.templateType;
        this.dialogRef.componentInstance.dialogContent = dialogOptions.dialogContent;

        return this.dialogRef;
    }

    openInnerConfirm(dialogContent: DialogContent): Observable<DialogResponse> {
        this.dialogRef.componentInstance.showConfirmInside(dialogContent);

        return this.dialogRef.componentInstance.confirmInsideResponseChanges$;
    }

    close(action: DialogResponse): void {
        this.dialogRef.close(action);
    }

    closeAll(): void {
        this.dialog.closeAll();
    }
}
