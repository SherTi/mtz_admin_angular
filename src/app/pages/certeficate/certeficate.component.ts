import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-certeficate',
  templateUrl: './certeficate.component.html',
  styleUrls: ['./certeficate.component.css']
})
export class CerteficateComponent {
  file?: File;


  form: FormGroup = new FormGroup(
    {

    }
  )

  onFileSelected($event: Event) {
    if (($event.target as HTMLInputElement).files![0]) {
      this.file = ($event.target as HTMLInputElement).files![0];
    }
  }

  submit() {
    if (this.file && this.form.valid) {
      const formToUpload = new FormData();
      formToUpload.append("image", this.file);
    }
  }
}
