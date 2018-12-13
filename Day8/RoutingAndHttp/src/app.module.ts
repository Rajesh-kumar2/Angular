import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { RootComponent } from "./app.component";
import { ListComponent } from './ListComponent/list.component';
import { QuoteComponent } from './QuoteComponent/quote.component';
import { routes } from './app.routes';
import { HomeComponent } from './HomeComponent/home.component';
import { NotFoundComponent } from './NotFoundComponent/notfound.component';
import { ProductsComponent } from './Products/products.component';
import { ProductDetailsComponent } from './Products/productdetails.component';
import { ProductNotSelectedComponent } from './Products/notselected.component';
import { SecuredComponent } from './SecuredComponent/secured.component';
import { AuthenticationService } from './Services/authentication.service';
import { LoginComponent } from './LoginComponent/login.component';
import { AuthGuard } from './Services/authguard.service';
import { TokenInterceptor } from './Services/httpinterceptor.service';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
        RouterModule.forRoot(routes)],
    declarations: [RootComponent, HomeComponent, NotFoundComponent,
        ProductsComponent, ProductDetailsComponent, ProductNotSelectedComponent,
        ListComponent, QuoteComponent, SecuredComponent, LoginComponent],
    providers: [AuthenticationService, AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }],
    bootstrap: [RootComponent]
})
export class AppModule { }