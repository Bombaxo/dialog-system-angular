import { Component, ViewChild, ElementRef, Renderer2 } from "@angular/core";

import { DialogService } from "./shared/dialog/dialog.service";
import {
  DialogContent,
  DialogResponse,
  DialogConfig,
} from "./shared/interfaces/dialog.interface";
import { ExampleFormComponent } from "./examples/example-form/example-form.component";
import { ExampleReportComponent } from "./examples/example-report/example-report.component";
import { ExampleAvailableTimeComponent } from "./examples/example-available-time/example-available-time.component";
import { ExampleSubcriptionComponent } from "./examples/example-subcription/example-subcription.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("overlayCustomDialogMain", { static: false })
  overlayCustomDialogMain: ElementRef; // main
  @ViewChild("overlayCustomDialogDiv", { static: false })
  overlayCustomDialogDiv: ElementRef; // div

  dialogResponse = "";

  constructor(
    private dialogService: DialogService,
    private renderer: Renderer2
  ) {}

  /***********************
   *  Alerts secion
   *********************** */

  openAlertStandar() {
    const dialogContent: DialogContent = {
      title: "Hey!",
      content: ["You already have booked this appointment"],
      primaryButton: {
        label: "Ok",
        icon: "notifications",
      },
    };

    const dialogConfig: DialogConfig = {
      templateType: "message",
      dialogContent: dialogContent,
    };

    this.dialogService.open(dialogConfig);
  }

  openAlertWarning() {
    const dialogContent: DialogContent = {
      title: "Ohhh!",
      content: [
        "You are trying to book an appointment in the past",
        "We dont handle time machines...yet",
      ],
      primaryButton: {
        label: "Ok",
        color: "warning",
        icon: "warning",
      },
    };

    const dialogConfig: DialogConfig = {
      templateType: "message",
      dialogContent: dialogContent,
    };

    this.dialogService.open(dialogConfig);
  }

  openAlertDanger() {
    const dialogContent: DialogContent = {
      title: "Nope!",
      content: ["The booking was already cancelled"],
      primaryButton: {
        label: "Ok",
        icon: "report",
        color: "warn",
      },
    };

    const dialogConfig: DialogConfig = {
      templateType: "message",
      dialogContent: dialogContent,
    };

    this.dialogService.open(dialogConfig);
  }

  /***********************
   *  Confirm secion
   *********************** */

  openConfirmSuccess() {
    const dialogContent: DialogContent = {
      title: "Hey!",
      content: [
        "Do you want to confirm the appointment?",
        "Appointment time: 21:30 of Friday 24.11.21",
      ],
      primaryButton: {
        label: "Confirm",
        color: "success",
        icon: "check",
        action: "book-confirmed",
      },
      secondaryButton: {
        label: "Cancel",
        icon: "close",
      },
    };

    const dialogConfig: DialogConfig = {
      templateType: "message",
      dialogContent: dialogContent,
      matDialogConfig: {
        disableClose: true,
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
      });
  }

  openConfirmDanger() {
    const dialogContent: DialogContent = {
      title: "Hey!",
      content: [
        "Are you sure you want to cancel the appointment?",
        "Appointment time: 21:30 of Friday 24.11.21",
      ],
      primaryButton: {
        label: "Delete",
        color: "warn",
        icon: "report",
        action: "book-cancelled",
      },
      secondaryButton: {
        label: "Cancel",
        icon: "close",
      },
    };

    const dialogConfig: DialogConfig = {
      templateType: "message",
      dialogContent: dialogContent,
      matDialogConfig: {
        disableClose: true,
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
      });
  }

  openConfirmEvent() {
    const dialogContent: DialogContent = {
      title: "Logout",
      content: ["Do you want to logout from your account?"],
      primaryButton: {
        label: "Logout",
        action: "logout-confirmed",
        icon: "logout",
      },
      secondaryButton: {
        label: "Cancel",
        icon: "close",
      },
    };

    const dialogConfig: DialogConfig = {
      templateType: "message",
      dialogContent: dialogContent,
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
      });
  }

  /***********************
   *  Component secion
   *********************** */

  openFormDialog() {
    const dialogConfig: DialogConfig = {
      templateType: "component",
      component: ExampleFormComponent,
      matDialogConfig: {
        panelClass: ["dialog__mob-fullscreen"],
        width: "300px",
        disableClose: true,
        data: {
          param: "data",
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }

  openReportDialog() {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: "component",
      component: ExampleReportComponent,
      matDialogConfig: {
        panelClass: ["dialog__mob-fullscreen"],
        width: "300px",
        data: {
          param: "data",
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }

  openTimeSlotInnerDialog(type: string) {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: "component",
      component: ExampleAvailableTimeComponent,
      matDialogConfig: {
        disableClose: true,
        panelClass: ["dialog__mob-fullscreen"],
        width: "500px",
        height: "400px",
        data: {
          type,
          availableTimes: [
            "08:00",
            "08:15",
            "09:30",
            "10:00",
            "12:00",
            "12:15",
            "12:45",
            "13:00",
            "14:00",
          ],
        },
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
      });
  }

  /***********************
   *  Custom overlay secion
   *********************** */

  openFreemiunCustomDialog() {
    const dialogConfig: DialogConfig = {
      overlayBlur: true,
      overlayCustomRender: this.renderer,
      overlayCustomElement: this.overlayCustomDialogMain,
      templateType: "component",
      component: ExampleSubcriptionComponent,
      matDialogConfig: {
        panelClass: ["dialog", "dialog__full-screen"],
        disableClose: true
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
      });
  }

  openAvailabilitiesCustomDialog() {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      overlayCustomRender: this.renderer,
      overlayCustomElement: this.overlayCustomDialogMain,
      templateType: "component",
      component: ExampleAvailableTimeComponent,
      matDialogConfig: {
        panelClass: ["dialog__mob-fullscreen"],
        width: "500px",
        height: "400px",
        data: {
          type: "success",
          availableTimes: [
            "08:00",
            "08:15",
            "09:30",
            "10:00",
            "12:00",
            "12:15",
            "12:45",
            "13:00",
            "14:00",
          ],
        },
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
      });
  }

  openMessageCustomDialog() {
    const dialogContent: DialogContent = {
      title: "Main nav",
      content: ["Do you want to check main nav while deciding blue or red?"],
      primaryButton: {
        label: "Red",
        action: "red",
        color: "warn",
        icon: "grid_3x3",
      },
      secondaryButton: {
        label: "Blue",
        action: "blue",
        icon: "grid_goldenratio",
      },
    };

    const dialogConfig: DialogConfig = {
      overlayCustomRender: this.renderer,
      overlayCustomElement: this.overlayCustomDialogMain,
      templateType: "message",
      dialogContent: dialogContent,
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
      });
  }

  openMessageBlockedCustomDialog() {
    const dialogContent: DialogContent = {
      title: "Content locked",
      content: ["You need to be premium to use this buttons"],
      primaryButton: {
        label: "Go premium",
        action: "go-premium",
        icon: "military_tech",

      },
      secondaryButton: {
        label: "No thanks",
        icon: "thumb_down",
      },
    };

    const dialogConfig: DialogConfig = {
      overlayBlur: true,
      overlayCustomRender: this.renderer,
      overlayCustomElement: this.overlayCustomDialogDiv,
      templateType: "message",
      dialogContent: dialogContent,
      matDialogConfig: {
        disableClose: true,
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.dialogResponse = response?.action;
        if (response?.action === "go-premium") {
          this.dialogService.close({ action: response?.action });
          this.openFreemiunCustomDialog();
        } else{
          this.dialogService.close({ action: 'close-custom-dialog' });
        }
      });
  }
}
