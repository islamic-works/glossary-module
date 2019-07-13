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
        private route: ActivatedRoute,
        private glossaryService: GlossaryService
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;

        let id: number = parseInt(this.route.snapshot.params.id);
        if (!id) id = this.findIdByTerm(this.route.snapshot.params.term);

        this.item = this.glossaryService.getItem(id);
        this.icon = this.glossaryService.getIcon(id);
    }
    findIdByTerm(term: string): number {
        let t: GlossaryItem = this.glossaryService.findIdByTerm(term);
        if (t) return t.id;
        else return null;
    }
}
