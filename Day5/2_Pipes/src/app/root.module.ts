import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ListComponent } from "./ListComponent/list.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, CapitalizePipe],
    bootstrap: [RootComponent]
})
export class RootModule { }