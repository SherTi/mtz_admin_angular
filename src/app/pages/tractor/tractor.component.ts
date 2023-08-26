import { Component } from '@angular/core';
import {animate, animation, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-tractor',
  templateUrl: './tractor.component.html',
  styleUrls: ['./tractor.component.css'],
  animations:[
    trigger('select',[
      transition(':enter', [
        animation([
          style({
            transform: 'translateY(-50%)',
          }),
          animate('0.3s', style(
            {
              transform: 'translateY(0)',
            }
          )),
        ])
      ]),
      transition(':leave', [
        animation([
          style({
            transform: 'translateY(-20%)',
          }),
          animate('0.3s', style(
            {
              transform: 'translateY(-50%)',
              zIndex: "-5"
            }
          )),
        ])
      ])
    ]),
  ]
})
export class TractorComponent {

  selectBlock:boolean = false

}
