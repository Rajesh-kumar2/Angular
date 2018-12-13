import { Routes } from "@angular/router";

import { HomeComponent } from "./HomeComponent/home.component";
import { NotFoundComponent } from "./NotFoundComponent/notfound.component";
import { ListComponent } from "./ListComponent/list.component";
import { QuoteComponent } from "./QuoteComponent/quote.component";
import { ProductsComponent } from "./Products/products.component";
import { ProductNotSelectedComponent } from "./Products/notselected.component";
import { ProductDetailsComponent } from "./Products/productdetails.component";
import { SecuredComponent } from "./SecuredComponent/secured.component";
import { LoginComponent } from "./LoginComponent/login.component";
import { AuthGuard } from "./Services/authguard.service";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'quote/:name', component: QuoteComponent },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: '', component: ProductNotSelectedComponent },
            { path: ':id', component: ProductDetailsComponent },        
        ]
    },
    { path: 'lazy', loadChildren:'./LazyModule/app.lazymodule#LazyModule' },
    { path: 'secured', component: SecuredComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];