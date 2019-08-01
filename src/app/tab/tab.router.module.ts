import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'disease',
        children: [
          {
            path: '',
            loadChildren: '../diseases/diseases.module#DiseasesPageModule'
          }
        ]
      },
      {
        path: 'food',
        children: [
          {
            path: '',
            loadChildren: '../food/food.module#FoodPageModule'
          }
        ]
      },
      {
        path: 'fitness',
        children: [
          {
            path: '',
            loadChildren: '../fitness/fitness.module#FitnessPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabPageRoutingModule {}
