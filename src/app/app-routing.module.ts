import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { TrangchuComponent } from './components/trangchu/trangchu.component';

const routes: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'product/:id', component: ProductContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
