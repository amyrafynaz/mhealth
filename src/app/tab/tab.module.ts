import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabPage } from './tab.page';

const routes: Routes = [
  
  {
    path: '',
    component: TabPage,
    children: [
      { path: 'home',loadChildren: '../home/home.module#HomePageModule'},
      { path: 'diseases', loadChildren: '../diseases/diseases.module#DiseasesPageModule'},
      { path: 'food', loadChildren: '../food/food.module#FoodPageModule'},
      { path: 'fitness', loadChildren: '../fitness/fitness.module#FitnessPageModule'},
      { path: 'typedisease', loadChildren: '../typedisease/typedisease.module#TypediseasePageModule'},
      { path: 'typefood', loadChildren: '../typefood/typefood.module#TypefoodPageModule'},
    ]
  },
  {
    path: 'tab',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
