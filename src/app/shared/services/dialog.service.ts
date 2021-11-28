import { Injectable, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig,  MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogConfig, DialogContent, DialogResponse } from '../interfaces/dialog.interface';
import { DynamicMatDialog } from '../dynamic-overlay-container/dynamic-dialog';

@Injectable({
    providedIn: 'root',
})
export class DialogService {

    dialogRef: MatDialogRef<DialogComponent>;
    currentRenderer: Renderer2;
    scrollContainerRef: ElementRef;

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
        private customDialog: DynamicMatDialog
    ) { }

    open(dialogConfig: DialogConfig): MatDialogRef<DialogComponent> {
        this.defaultDialog.matDialogConfig.backdropClass = dialogConfig.backDropBlur
            ? 'dialog__overlay--blur'
                : '';
        const dialogOptions = {
            ...this.defaultDialog,
            ...dialogConfig,
            matDialogConfig: {
                ...this.defaultDialog?.matDialogConfig,
                ...dialogConfig?.matDialogConfig
            }
        };

        if (dialogConfig.backDropCustomElement) {

            this.openCustomDialog(
                dialogOptions.matDialogConfig.data.component,
                dialogConfig.backDropCustomElement,
                dialogOptions.matDialogConfig
            );
        } else {
            this.dialogRef = this.dialog.open(DialogComponent, dialogOptions.matDialogConfig);
            this.dialogRef.componentInstance.showCloseIcon = dialogOptions.showCloseIcon;
            this.dialogRef.componentInstance.templateType = dialogOptions.templateType;
            this.dialogRef.componentInstance.dialogContent = dialogOptions.dialogContent;

            return this.dialogRef;
        }

    }

    openCustomDialog(component: any, renderer: Renderer2, matDialogConfig: MatDialogConfig): void {
        this.currentRenderer = renderer;
        this.customDialog.setContainerElement(this.scrollContainerRef.nativeElement, renderer);
        this.customDialog.open(component, matDialogConfig);
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
