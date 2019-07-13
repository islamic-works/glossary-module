import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MenuModule } from "./../menu/menu.module";
import { GlossaryComponent } from "./glossary.component";
import { GlossaryRoutingModule } from "./glossary-routing.module";
import { ItemDetailComponent } from "./item-detail.component";

@NgModule({
  imports: [NativeScriptCommonModule, GlossaryRoutingModule, MenuModule],
  declarations: [GlossaryComponent, ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GlossaryModule {}
