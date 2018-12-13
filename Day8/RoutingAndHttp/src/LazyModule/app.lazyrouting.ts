import { Routes, RouterModule } from "@angular/router";
import { LazyComponent } from "./app.lazycomponent";
import { ModuleWithProviders } from "@angular/compiler/src/core";

const routes: Routes = [
    { path: '', component: LazyComponent }
];

export const RouteProviders: ModuleWithProviders =
    RouterModule.forChild(routes);