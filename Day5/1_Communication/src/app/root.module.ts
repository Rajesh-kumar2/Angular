import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ListComponent } from "./ListComponent/list.component";
import { ChildComponent } from "./ChildComponent/child.component";
import { CounterComponent } from "./Counter/counter.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, ChildComponent, CounterComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }