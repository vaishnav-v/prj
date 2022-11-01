import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    {
      path: 'documentation',
      loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
