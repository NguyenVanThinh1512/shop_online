import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { TrangchuComponent } from './components/trangchu/trangchu.component';
import { GioithieuComponent } from './components/gioithieu/gioithieu.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { TintucComponent } from './components/tintuc/tintuc.component';
import { ChitiettintucComponent } from './components/chitiettintuc/chitiettintuc.component';
import { ThanhtoanComponent } from './components/thanhtoan/thanhtoan.component';
import { ThanhtoangiaohangComponent } from './components/thanhtoangiaohang/thanhtoangiaohang.component';
import { DanhmucsanphamComponent } from './components/danhmucsanpham/danhmucsanpham.component';

const routes: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'product/:id', component: ProductContainerComponent },
  { path: 'gioithieu', component: GioithieuComponent },
  { path: 'lienhe', component: LienheComponent },
  { path: 'tintuc', component: TintucComponent },
  { path: 'chitiettintuc', component: ChitiettintucComponent },
  { path: 'thanhtoan', component: ThanhtoanComponent },
  { path: 'thanhtoangiaohang', component: ThanhtoangiaohangComponent },
  { path: 'danhmucsanpham', component: DanhmucsanphamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
