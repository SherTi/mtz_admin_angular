import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TractorComponent } from './pages/tractor/tractor.component';
import { PartComponent } from './pages/part/part.component';
import { MainComponent } from './shared/layouts/main/main.component';
import { CategoryComponent } from './pages/category/category.component';
import { CerteficateComponent } from './pages/certeficate/certeficate.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ChangeInfoComponent } from './pages/change-info/change-info.component';
import { MessageComponent } from './pages/message/message.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputComponent } from './shared/components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    TractorComponent,
    PartComponent,
    MainComponent,
    CategoryComponent,
    CerteficateComponent,
    ListProductComponent,
    ChangeInfoComponent,
    MessageComponent,
    InputComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
      ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
