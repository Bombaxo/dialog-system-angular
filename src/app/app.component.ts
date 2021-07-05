import { Component } from '@angular/core';

import { DialogService } from './shared/services/dialog.service';
import { DialogContent, DialogResponse, DialogConfig } from './shared/interfaces/dialog.interface';
import { ExampleFormComponent } from './shared/components/example-form/example-form.component';
import { ExampleReportComponent } from './shared/components/example-report/example-report.component';
import { ExampleAvailableTimeComponent } from './shared/components/example-available-time/example-available-time.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  response = '';

  constructor(
    private dialogService: DialogService,
  ) { }


  /*********************** 
   *  Alerts secion
   *********************** */

  openAlertStandar() {
    const dialogContent: DialogContent = {
      title: 'Hey!',
      content: ['You already have booked this appointment'],
      primaryButton: {
        label: 'Ok'
      }
    };

    const dialogConfig: DialogConfig = {
      templateType: 'message',
      dialogContent: dialogContent
    };

    this.dialogService.open(dialogConfig);
  }

  openAlertWarning() {
    const dialogContent: DialogContent = {
      title: 'Ohhh!',
      content: ['You are trying to book an appointment in the past', 'We dont handle time machines...yet'],
      primaryButton: {
        label: 'Ok',
        icon: ''
      }
    };

    const dialogConfig: DialogConfig = {
      templateType: 'message',
      dialogContent: dialogContent
    };

    this.dialogService.open(dialogConfig);
  }

  openAlertDanger() {
    const dialogContent: DialogContent = {
      title: 'Nope!',
      content: ['The booking was already cancelled'],
      primaryButton: {
        label: 'Ok'
      }
    };

    const dialogConfig: DialogConfig = {
      templateType: 'message',
      dialogContent: dialogContent
    };

    this.dialogService.open(dialogConfig);
  }


  /*********************** 
   *  Confirm secion
   *********************** */

  openConfirmSuccess() {
    const dialogContent: DialogContent = {
      title: 'Hey!',
      content: ['Do you want to confirm the appointment?', 'Appointment time: 21:30 of Friday 24.11.21'],
      primaryButton: {
        label: 'Confirm',
        color: 'success',
        action: 'book-confirmed'
      },
      secondaryButton: {
        label: 'Cancel'
      }
    };

    const dialogConfig: DialogConfig = {
      templateType: 'message',
      dialogContent: dialogContent
    };

    this.dialogService.open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.response = response?.action;
      });;
  }

  openConfirmDanger() {
    const dialogContent: DialogContent = {
      title: 'Hey!',
      content: ['Are you sure you want to cancel the appointment?', 'Appointment time: 21:30 of Friday 24.11.21'],
      primaryButton: {
        label: 'Delete',
        color: 'warn',
        action: 'book-cancelled'
      },
      secondaryButton: {
        label: 'Cancel',
      }
    };

    const dialogConfig: DialogConfig = {
      templateType: 'message',
      dialogContent: dialogContent
    };

    this.dialogService.open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.response = response?.action;
      });
  }

  openConfirmInfoSuccess() {
    const dialogContent: DialogContent = {
      title: 'Logout',
      content: ['Do you want to logout from your account?'],
      primaryButton: {
        label: 'Logout',
        action: 'logout'
      },
      secondaryButton: {
        label: 'Cancel',
      }
    };

    const dialogConfig: DialogConfig = {
      templateType: 'message',
      dialogContent: dialogContent
    };

    this.dialogService.open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.response = response?.action;
      });;
  }


  /*********************** 
   *  Component secion
   *********************** */

  openFormDialog() {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: 'component',
      matDialogConfig: {
        panelClass: ['tx-dialog', 'tx-dialog__mob'],
        width: '300px',
        data: {
          param: 'data',
          component: ExampleFormComponent,
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }

  openReportDialog() {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: 'component',
      matDialogConfig: {
        panelClass: ['tx-dialog', 'tx-dialog__mob'],
        width: '300px',
        data: {
          param: 'data',
          component: ExampleReportComponent,
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }

  openAvailabilitiesDialog(type: string) {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: 'component',
      matDialogConfig: {
        panelClass: ['tx-dialog', 'tx-dialog__mob'],
        width: '500px',
        height: '400px',
        data: {
          type,
          availableTimes: ['08:00', '08:15', '09:30', '10:00', '12:00', '12:15', '12:45', '13:00', '14:00'],
          component: ExampleAvailableTimeComponent,
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }


  /*********************** 
   *  Custom overlay secion
   *********************** */

  openCustomDialog() {
  }
}
