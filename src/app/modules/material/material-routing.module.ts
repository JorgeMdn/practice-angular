import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    children: [
      {
        path: 'forms',
        loadChildren: () =>
          import('./pages/forms/forms.module').then((m) => m.FormsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
