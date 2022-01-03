import { Component } from "@angular/core";
import { DialogService } from '../../shared/dialog/dialog.service';

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
