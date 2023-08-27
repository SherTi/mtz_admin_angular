import {Component, Injector, ViewChild} from '@angular/core';
import {animate, animation, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tractor',
  templateUrl: './tractor.component.html',
  styleUrls: ['./tractor.component.css'],
  animations:[
    trigger('select',[
      transition(':enter', [
        animation([
          style({
            transform: 'translateY(-100%)',
            maxHeight: '100%',
            overflowY: 'visible',
          }),
          animate('0.3s', style(
            {
              transform: 'translateY(0)',
              maxHeight: '100%',
            }
          )),
        ])
      ]),
      transition(':leave', [
        animation([
          style({
            transform: 'translateY(0%)',
          }),
          animate('0.3s', style(
            {
              transform: 'translateY(-50%)',
              maxHeight: '50%',
              overflowY: 'hidden',
              opacity:'0.5'
            }
          )),
        ])
      ])
    ]),
  ]
})
export class TractorComponent {


  form: FormGroup = new FormGroup({
    category: new FormControl(null, {validators: [Validators.required]}),
    name: new FormControl(null, {validators: [Validators.required]}),
    deck: new FormControl(null,{validators:[Validators.required]}),
    deckValue: new FormControl(null,{validators:[Validators.required]}),
    deckKey: new FormControl(null,{validators:[Validators.required]}),
    deckValueTrans: new FormControl(null,{validators:[Validators.required]}),
    deckKeyTrans: new FormControl(null,{validators:[Validators.required]}),

  });

  templates = []
  file?: File

  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(){
    this.addInput()
  }
  onFileSelected($event: Event) {
    if (($event.target as HTMLInputElement).files![0]) {
      this.file = ($event.target as HTMLInputElement).files![0];
    }
  }

  submit() {
    console.log(this.form.get("name"));
    if (this.file && this.form.valid) {
      const formToUpload = new FormData();
      formToUpload.append("image", this.file);
      formToUpload.append("name", this.form.get("name")?.value);
      formToUpload.append("category", this.form.get("category")?.value);
      formToUpload.append("deck" , this.form.get("deck")?.value)
    }
  }
  addInput() {
    const inputTem = document.createElement('input')
    inputTem.type = 'text'
    inputTem.className = '.info_input'
  }
}
