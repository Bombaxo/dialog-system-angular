import { DialogContent, DialogResponse } from './../../interfaces/dialog.interface';
import { DialogService } from './../../services/dialog.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-example-available-time',
  templateUrl: './example-available-time.component.html',
  styleUrls: ['./example-available-time.component.scss']
})
export class ExampleAvailableTimeComponent {

  availableTimes: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogService: DialogService
  ) {
    this.availableTimes = this.data?.availableTimes;
  }

  openConfirmAppointment(time: string) {

    let message = '';
    let labelPrimary = '';
    let action = '';

    switch (this.data?.type) {
      case 'success':
        console.log('success', time);
        message = `Do you want to confirm the appointment at ${time}?`;
        labelPrimary = 'Confirm';
        action = 'book-confirm';
        break;

      case 'error':
        console.log('error', time);
        message = `Do you want to cancel the appointment at ${time}?`;
        labelPrimary = 'Cancel';
        action = 'book-cancel';
        break;

      case 'info':
        console.log('info', time);
        message = `Maybe some other info about a wrong action`;
        labelPrimary = 'Ok';
        break;

      default:
        break;
    }

    const dialogContent: DialogContent = {
      title: '',
      content: [message],
      primaryButton: {
        label: labelPrimary,
        action: action,
      },
      secondaryButton: {
        label: this.data?.type !== 'info' ? 'Abort' : null
      },
    };

    this.dialogService.openInnerConfirm(dialogContent).subscribe((response: DialogResponse) => {
      if (action && response?.action === action) {
        this.dialogService.close({ action: '' });
        console.log('returned: ', response?.action);
      }
    });

  }
}
