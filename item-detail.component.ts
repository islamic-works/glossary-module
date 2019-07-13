import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { GlossaryItem } from "./glossary-item";
import { GlossaryService } from "./glossary.service";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.scss"]
})
export class ItemDetailComponent implements OnInit {
    item: GlossaryItem;
    icon: string;

    constructor(
        private page: Page,
        private glossaryService: GlossaryService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        const id = +this.route.snapshot.params.id;
        this.item = this.glossaryService.getItem(id);
        this.icon = this.glossaryService.getIcon(id);
    }
}
