import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  form : FormGroup = new FormGroup({
    nameCategory: new FormControl(null,{validators:[Validators.required]}),
  })

  submit() {
    if (this.form.valid) {
      const formToUpload = new FormData();
      formToUpload.append("nameCategory", this.form.get("nameCategory")?.value)
    }
  }
}
