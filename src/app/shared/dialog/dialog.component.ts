import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { DialogContent, DialogResponse, DialogTemplateType } from '../interfaces/dialog.interface';

@Component({
    selector: 'ui-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
    showCloseIcon: boolean;
    dialogData: any;
    dialogConfirmData: any;
    dialogContent: DialogContent;
    dialogConfirmContent: DialogContent;
    templateType: DialogTemplateType;
    showConfirmBox = false;
    confirmInsideResponse = new Subject<DialogResponse>();
    confirmInsideResponseChanges$ = this.confirmInsideResponse.asObservable();

    constructor(
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data       // property from matDialogConfig from material
    ) {
        this.dialogData = data;
    }

    dialogClose(response: DialogResponse): void {
        this.dialogRef.close(response);
    }

    showConfirmInside(dialogContent: DialogContent): void {
        this.confirmInsideResponse = new Subject<DialogResponse>();
        this.confirmInsideResponseChanges$ = this.confirmInsideResponse.asObservable();

        this.dialogConfirmContent = dialogContent;
        this.showConfirmBox = true;
    }

    dialogCloseConfirmInside(action: DialogResponse): void {
        this.confirmInsideResponse.next(action);
        this.confirmInsideResponse.complete();
        this.showConfirmBox = false;
    }
}
