import { Component } from '@angular/core';

import { DialogService } from './shared/services/dialog.service';
import { DialogContent, DialogResponse, DialogConfig } from './shared/interfaces/dialog.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
      title: 'Oops!',
      content: ['You cannot perform this action!'],
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

  openConfirmWarning() {
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

  openConfirmDanger() {
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

  openConfirmInfoSuccess() {
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


  /*********************** 
   *  Component secion
   *********************** */

  openFormDialog() {
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

  /*********************** 
   *  Alerts secion
   *********************** */

  openCustomDialog() {
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
}
