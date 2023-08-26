import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./shared/layouts/main/main.component";
import {TractorComponent} from "./pages/tractor/tractor.component";
import {PartComponent} from "./pages/part/part.component";
import {CategoryComponent} from "./pages/category/category.component";
import {ListProductComponent} from "./pages/list-product/list-product.component";
import {CerteficateComponent} from "./pages/certeficate/certeficate.component";
import {ChangeInfoComponent} from "./pages/change-info/change-info.component";
import {MessageComponent} from "./pages/message/message.component";
import {EditProductComponent} from "./pages/edit-product/edit-product.component";
import {SingInComponent} from "./pages/sing-in/sing-in.component";

const routes: Routes = [
  {
    path: "", component:MainComponent, children : [
      {path: "" , redirectTo: "tractor", pathMatch: "full"},
      {path: "tractor", component:TractorComponent},
      {path: "part", component:PartComponent},
      {path: "category", component:CategoryComponent},
      {path: "certificate" , component:CerteficateComponent},
      {path: "list", component:ListProductComponent},
      {path: "change", component:ChangeInfoComponent},
      {path: "message", component:MessageComponent},
      {path: "edit", component:EditProductComponent}
    ]
  },
  {path: "sing-in", component: SingInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
