import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrangchuComponent } from './components/trangchu/trangchu.component';
import { ContenTintucComponent } from './components/conten-tintuc/conten-tintuc.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TrangchuComponent,
    ContenTintucComponent,
    ProductContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
