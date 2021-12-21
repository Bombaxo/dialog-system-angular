import { Injectable, Renderer2, ElementRef } from '@angular/core';
import { MatDialog,  MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { DialogComponent } from '../dialog/dialog.component';
import { DialogConfig, DialogContent, DialogResponse } from '../interfaces/dialog.interface';
import { DynamicMatDialog } from '../dynamic-overlay-container/dynamic-dialog';

@Injectable({
    providedIn: 'root',
})
export class DialogService {

    dialogRef: MatDialogRef<DialogComponent>;
    targetRenderer: Renderer2;
    targetElementRef: ElementRef;

    private defaultDialog: DialogConfig = {
        showCloseIcon: false,
        templateType: 'component',
        matDialogConfig: {
            panelClass: 'dialog',
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
        const dialogOptions = {
            ...this.defaultDialog,
            ...dialogConfig,
            matDialogConfig: {
                ...this.defaultDialog?.matDialogConfig,
                ...dialogConfig?.matDialogConfig,
                backdropClass: dialogConfig.overlayBlur ? 'dialog__overlay--blur' : ''
            }
        };

        if (dialogConfig?.overlayCustomRender && dialogConfig?.overlayCustomElement?.nativeElement) {
            this.targetRenderer = dialogConfig.overlayCustomRender;
            this.targetElementRef = dialogConfig.overlayCustomElement;
            this.customDialog.setContainerElement(dialogConfig.overlayCustomElement.nativeElement, dialogConfig.overlayCustomRender);
            this.dialogRef = this.customDialog.open(DialogComponent, dialogOptions?.matDialogConfig);
        } else {
            this.dialogRef = this.dialog.open(DialogComponent, dialogOptions.matDialogConfig);
        }
        this.dialogRef.componentInstance.showCloseIcon = dialogOptions.showCloseIcon;
        this.dialogRef.componentInstance.templateType = dialogOptions.templateType;
        this.dialogRef.componentInstance.component = dialogOptions.component;
        this.dialogRef.componentInstance.dialogContent = dialogOptions.dialogContent;
        
        return this.dialogRef;
    }

    openInnerConfirm(dialogContent: DialogContent): Observable<DialogResponse> {
        this.dialogRef.componentInstance.showConfirmInside(dialogContent);

        return this.dialogRef.componentInstance.confirmInsideResponseChanges$;
    }

    close(action: DialogResponse): void {
        if (this.targetRenderer && this.targetElementRef) {
            this.targetRenderer.removeStyle(this.targetElementRef.nativeElement, 'overflow');
            this.targetRenderer.removeStyle(this.targetElementRef.nativeElement, 'transform');
        }
        this.dialogRef.close(action);
    }

    closeAll(): void {
        this.dialog.closeAll();
    }
}
