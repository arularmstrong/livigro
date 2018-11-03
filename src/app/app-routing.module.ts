import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPackageComponent } from './package/view-package/view-package.component';
import {ListPackageComponent} from './package/list-package/list-package.component';
import {SliderComponent} from './package/slider/slider.component';
const routes: Routes = [
    {
        path: '',
        component: SliderComponent
      },
    {
    path: 'viewpackage',
    component: ViewPackageComponent
  },
  {
    path: 'packages',
    component: ListPackageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }