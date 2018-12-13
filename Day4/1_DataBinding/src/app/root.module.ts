import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { AssignOneComponent } from "./a1.component";
import { AssignTwoComponent } from "./a2.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, AssignOneComponent, AssignTwoComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }