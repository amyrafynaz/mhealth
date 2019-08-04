import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'disease', loadChildren: './disease/disease.module#DiseasePageModule' },
  // { path: 'food', loadChildren: './food/food.module#FoodPageModule' },
  // { path: 'fitness', loadChildren: './fitness/fitness.module#FitnessPageModule' },
  { path: 'tab', loadChildren: './tab/tab.module#TabPageModule' },
  { path: 'diseases', loadChildren: './diseases/diseases.module#DiseasesPageModule' },
  { path: 'typedisease', loadChildren: './typedisease/typedisease.module#TypediseasePageModule' },
  { path: 'typefood', loadChildren: './typefood/typefood.module#TypefoodPageModule' },
  { path: 'info1', loadChildren: './info1/info1.module#Info1PageModule' },
  { path: 'info2', loadChildren: './info2/info2.module#Info2PageModule' },
  { path: 'info3', loadChildren: './info3/info3.module#Info3PageModule' },
  { path: 'info4', loadChildren: './info4/info4.module#Info4PageModule' },
  { path: 'info5', loadChildren: './info5/info5.module#Info5PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
