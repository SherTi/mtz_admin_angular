import { Component } from '@angular/core';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent {

  file?:File;
  fileSupply?:File;
  fileEmployers?:File

  onFileChangeEmployers($event: Event) {
    if (($event.target as HTMLInputElement).files![0]) {
      this.fileEmployers = ($event.target as HTMLInputElement).files![0];
    }
  }
  onFileChange($event: Event){
    if (($event.target as HTMLInputElement).files![0]) {
      this.fileSupply = ($event.target as HTMLInputElement).files![0];
    }
  }

  onFileSelected($event: Event) {
    if (($event.target as HTMLInputElement).files![0]) {
      this.file = ($event.target as HTMLInputElement).files![0];
    }
  }
}
