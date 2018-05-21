import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductComponent } from './components/product/product.componet';
import { ProductListComponent } from './components/productlist/productlist.component';
import { ContactComponent } from './components/contact/contact.componet';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'service', component: ServicesComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    ProductListComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
