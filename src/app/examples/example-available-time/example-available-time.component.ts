import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Button } from "../../shared/interfaces/button.interface";
import {
  DialogContent,
  DialogResponse,
} from "../../shared/interfaces/dialog.interface";
import { DialogService } from "../../shared/dialog/dialog.service";

@Component({
  selector: "app-example-available-time",
  templateUrl: "./example-available-time.component.html",
  styleUrls: ["./example-available-time.component.scss"],
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
    let message = "";
    let buttonConfig: Button = {
      label: "",
      action: "",
      color: "primary",
      icon: "",
    };

    switch (this.data?.type) {
      case "success":
        message = `Do you want to confirm the appointment at ${time}?`;
        buttonConfig = {
          label: "Confirm",
          action: "inner-book-confirmed",
          color: "success",
          icon: "check",
        };

        break;

      case "error":
        message = `Do you want to cancel the appointment at ${time}?`;
        buttonConfig = {
          label: "Cancel",
          action: "inner-book-canceled",
          color: "warn",
          icon: "report",
        };

        break;

      case "info":
        message = `Maybe some other info about a wrong action`;
        buttonConfig = {
          label: "Ok",
          action: "",
          color: "primary",
          icon: "",
        };

        break;

      default:
        break;
    }

    const dialogContent: DialogContent = {
      title: "",
      content: [message],
      primaryButton: buttonConfig,
      secondaryButton: {
        label: this.data?.type !== "info" ? "Abort" : null,
        icon: "close",
      },
    };

    this.dialogService
      .openInnerConfirm(dialogContent)
      .subscribe((response: DialogResponse) => {
        if (buttonConfig?.action === response?.action) {
          this.dialogService.close({ action: response?.action });
          console.log("openInnerConfirm returned: ", response?.action);
        }
      });
  }
}
