import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ListComponent } from "./ListComponent/list.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }