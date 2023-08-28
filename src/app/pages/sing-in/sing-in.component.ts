import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, {validators:[Validators.required]}),
    password: new FormControl(null, {validators:[Validators.required]}),
  })

  submit() {
    if (this.form.valid){
      const formToUpload = new FormData();
      formToUpload.append("name", this.form.get("name")?.value)
      formToUpload.append("password", this.form.get("password")?.value)
    }
  }
}
