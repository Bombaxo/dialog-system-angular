import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogContent, DialogResponse } from '../../interfaces/dialog.interface';

@Component({
    selector: 'ui-dialog-message',
    templateUrl: './dialog-message.component.html',
    styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent {

    @Input() dialogData: any;
    @Input() dialogContent: DialogContent;
    @Output() onButtonAction = new EventEmitter<DialogResponse>();

}
