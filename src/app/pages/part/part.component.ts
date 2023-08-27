import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent {

  file?:File

  form: FormGroup = new FormGroup({
    name: new FormControl(null, {validators:[Validators.required]}),
    category: new FormControl(null,{validators:[Validators.required]}),
    deck: new FormControl(null,{validators:[Validators.required]}),
    deckValue: new FormControl(null,{validators:[Validators.required]}),
    deckKey: new FormControl(null,{validators:[Validators.required]}),
  })

  submit() {
    if (this.file && this.form.valid) {
      const formToUpload = new FormData();
      formToUpload.append("image", this.file);
      formToUpload.append("name", this.form.get("name")?.value);
      formToUpload.append("category", this.form.get("category")?.value);
      formToUpload.append("deck" , this.form.get("deck")?.value);
      formToUpload.append('deckValue', this.form.get("deckValue")?.value);
      formToUpload.append('deckKey', this.form.get("deckKey")?.value);
  }
  }

  onFileSelected($event: Event) {
    if (($event.target as HTMLInputElement).files![0]) {
      this.file = ($event.target as HTMLInputElement).files![0];
    }
  }
}
