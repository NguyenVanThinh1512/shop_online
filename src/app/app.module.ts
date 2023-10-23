import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrangchuComponent } from './components/trangchu/trangchu.component';
import { ContenTintucComponent } from './components/conten-tintuc/conten-tintuc.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { GioithieuComponent } from './components/gioithieu/gioithieu.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { ChitiettintucComponent } from './components/chitiettintuc/chitiettintuc.component';
import { TintucComponent } from './components/tintuc/tintuc.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TrangchuComponent,
    ContenTintucComponent,
    ProductContainerComponent,
    GioithieuComponent,
    LienheComponent,
    ChitiettintucComponent,
    TintucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
