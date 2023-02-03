import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from './features/pagination/pagination/pagination.module';

const routes: Routes = [
  {path: 'pagination' , loadChildren:()=>import('./features/pagination/pagination/pagination.module').then(m=>m.PaginationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
