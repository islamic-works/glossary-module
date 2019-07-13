import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { GlossaryComponent } from "./glossary.component";
import { ItemDetailComponent } from "./item-detail.component";

const routes: Routes = [
  { path: "", component: GlossaryComponent },
  { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GlossaryRoutingModule { }
