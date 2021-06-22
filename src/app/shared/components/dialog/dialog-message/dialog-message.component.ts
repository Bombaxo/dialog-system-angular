import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogContent, DialogResponse } from '@core/modules/dialogs/models/dialog.interface';

@Component({
    selector: 'tx-dialog-message',
    templateUrl: './dialog-message.component.html',
    styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent {

    @Input() dialogData: any;
    @Input() dialogContent: DialogContent;
    @Output() onButtonAction = new EventEmitter<DialogResponse>();

}
