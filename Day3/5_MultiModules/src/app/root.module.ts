import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RootComponent } from "./root.component";
import { ModuleOne } from "./ModuleOne/mone.module";
import { ModuleTwo } from "./ModuleTwo/mtwo.module";

@NgModule({
    imports: [BrowserModule, ModuleOne, ModuleTwo],
    declarations: [RootComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }