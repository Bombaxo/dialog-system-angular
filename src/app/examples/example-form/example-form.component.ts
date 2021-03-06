import { DialogService } from '../../shared/dialog/dialog.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent {
  theForm: FormGroup;

  constructor(
    private dialogService: DialogService,
    private fb: FormBuilder,
  ) {
    this.theForm = this.fb.group({
      name: [''], surname: [''], email: [''], password: ['']
    });
  }

  submitForm(): void {
    this.dialogService.close({ action: 'submit-form' });
  }

}
