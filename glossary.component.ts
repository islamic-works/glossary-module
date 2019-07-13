import { Component, OnInit } from "@angular/core";

import { GlossaryItem } from "./glossary-item";
import { GlossaryService } from "./glossary.service";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ns-glossary",
    moduleId: module.id,
    templateUrl: "./glossary.component.html",
    styleUrls: ["./glossary.component.scss"]
})
export class GlossaryComponent implements OnInit {
    active: string;
    public items: Array<GlossaryItem>;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private page: Page, private glossaryService: GlossaryService) { }

    ngOnInit(): void {
        this.active = "glossary";
        this.page.actionBarHidden = true;
        this.items = this.glossaryService.getItems();
    }

    getIcon(id: number): string {
        return this.glossaryService.getIcon(id);
    }
}
