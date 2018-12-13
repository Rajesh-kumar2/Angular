import { NgModule } from '@angular/core';

import { LazyComponent } from './app.lazycomponent';
import { RouteProviders } from './app.lazyrouting';

@NgModule({
    imports: [RouteProviders],
    declarations: [LazyComponent]
})
export class LazyModule { }
