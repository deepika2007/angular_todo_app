import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogData } from './dialog.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'reminder-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  dialogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private apiModule: AppService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {
    this.dialogForm = this.fb.group({
      email: [data.email, [Validators.required, Validators.email]],
      time: [data.time, Validators.required],
      date: [data.date, Validators.required],
      id: data.id,
    });
  }

  submitReminder() {
    console.log(
      '-====-=-=-=-=-=-=-=-=-=-=------------============',
      this.dialogForm
    );
    if (this.dialogForm.valid) {
      const { value } = this.dialogForm;
      console.log('-----value------', value);
      this.apiModule.todoReminder(value).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
