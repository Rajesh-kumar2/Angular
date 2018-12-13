import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { RootComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }