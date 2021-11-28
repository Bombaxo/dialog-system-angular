import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
} from "@angular/core";

import { DialogService } from "./shared/services/dialog.service";
import {
  DialogContent,
  DialogResponse,
  DialogConfig,
} from "./shared/interfaces/dialog.interface";
import { ExampleFormComponent } from "./shared/components/example-form/example-form.component";
import { ExampleReportComponent } from "./shared/components/example-report/example-report.component";
import { ExampleAvailableTimeComponent } from "./shared/components/example-available-time/example-available-time.component";
import { ExampleSubcriptionComponent } from "./shared/components/example-subcription/example-subcription.component";

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

  response = "";

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
        icon: "",
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
        action: "book-confirmed",
      },
      secondaryButton: {
        label: "Cancel",
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
        this.response = response?.action;
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
        action: "book-cancelled",
      },
      secondaryButton: {
        label: "Cancel",
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
        this.response = response?.action;
      });
  }

  openConfirmInfoSuccess() {
    const dialogContent: DialogContent = {
      title: "Logout",
      content: ["Do you want to logout from your account?"],
      primaryButton: {
        label: "Logout",
        action: "logout",
      },
      secondaryButton: {
        label: "Cancel",
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
        this.response = response?.action;
      });
  }

  /***********************
   *  Component secion
   *********************** */

  openFormDialog() {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: "component",
      matDialogConfig: {
        panelClass: ["dialog", "dialog__full-screen"],
        width: "300px",
        data: {
          param: "data",
          component: ExampleFormComponent,
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }

  openReportDialog() {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: "component",
      matDialogConfig: {
        panelClass: ["dialog", "dialog__full-screen"],
        width: "300px",
        data: {
          param: "data",
          component: ExampleReportComponent,
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }

  openAvailabilitiesDialog(type: string) {
    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      templateType: "component",
      matDialogConfig: {
        panelClass: ["dialog", "dialog__full-screen"],
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
          component: ExampleAvailableTimeComponent,
        },
      },
    };

    this.dialogService.open(dialogConfig);
  }

  /***********************
   *  Custom overlay secion
   *********************** */

  openFreemiunCustomDialog() {
    this.dialogService.scrollContainerRef = this.overlayCustomDialogMain;

    const dialogConfig: DialogConfig = {
      backDropBlur: true,
      backDropCustomElement: this.renderer,
      templateType: "component",
      matDialogConfig: {
        panelClass: ["dialog", "dialog__full-screen"],
        disableClose: true,
        data: {
          component: ExampleSubcriptionComponent,
        },
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.response = response?.action;
      });
  }

  openAvailabilitiesCustomDialog() {
    this.dialogService.scrollContainerRef = this.overlayCustomDialogMain;

    const dialogConfig: DialogConfig = {
      showCloseIcon: true,
      backDropCustomElement: this.renderer,
      templateType: "component",
      matDialogConfig: {
        panelClass: ["dialog", "dialog__full-screen"],
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
          component: ExampleAvailableTimeComponent,
        },
      },
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.response = response?.action;
      });
  }

  openMessageCustomDialog() {
    this.dialogService.scrollContainerRef = this.overlayCustomDialogMain;

    const dialogContent: DialogContent = {
      title: "Logout",
      content: ["Do you want to logout from your account?"],
      primaryButton: {
        label: "Logout",
        action: "logout",
      },
      secondaryButton: {
        label: "Cancel",
      },
    };

    const dialogConfig: DialogConfig = {
      backDropCustomElement: this.renderer,
      templateType: "message",
      dialogContent: dialogContent,
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.response = response?.action;
      });
  }

  openMessageBlockedCustomDialog() {
    this.dialogService.scrollContainerRef = this.overlayCustomDialogDiv;

    const dialogContent: DialogContent = {
      title: "Content locked",
      content: ["You need to be premium to use this buttons"],
      primaryButton: {
        label: "Go premium",
        action: "go-premium",
      },
      secondaryButton: {
        label: "No thanks",
      },
    };

    const dialogConfig: DialogConfig = {
      backDropCustomElement: this.renderer,
      templateType: "message",
      dialogContent: dialogContent,
      matDialogConfig: {
        disableClose: true,
      } 
    };

    this.dialogService
      .open(dialogConfig)
      .afterClosed()
      .subscribe((response: DialogResponse) => {
        this.response = response?.action;
        if (response?.action === 'go-premium') {
          this.openFreemiunCustomDialog();
        }
      });
  }
}
