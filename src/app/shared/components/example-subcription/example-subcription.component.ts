import { Component } from "@angular/core";
import { DialogService } from "../../services/dialog.service";
import {
  DialogContent,
  DialogResponse,
  DialogConfig,
} from "../../interfaces/dialog.interface";

@Component({
  selector: "app-example-subcription",
  templateUrl: "./example-subcription.component.html",
  styleUrls: ["./example-subcription.component.scss"],
})
export class ExampleSubcriptionComponent {

  constructor(
    private dialogService: DialogService,
  ) {}

  goPremium(){
    this.dialogService.close({ action: 'subscribe-premium' });
  }
}
