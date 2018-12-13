import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ComponentOne } from "./ComponentOne/cone.component";
import { ComponentTwo } from "./ComponentTwo/ctwo.component";
import { RootComponent } from "./root.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [RootComponent,ComponentOne, ComponentTwo],
    bootstrap: [RootComponent]
})
export class RootModule { }