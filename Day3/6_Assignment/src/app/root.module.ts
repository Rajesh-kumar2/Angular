import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NavigationComponent } from "./navigation.component";
import { RootComponent } from "./root.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [RootComponent, NavigationComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }