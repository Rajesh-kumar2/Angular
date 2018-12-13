import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ComponentOne } from "./cone.component";
import { ComponentTwo } from "./ctwo.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [ComponentOne, ComponentTwo],
    bootstrap: [ComponentOne, ComponentTwo]
})
export class RootModule { }