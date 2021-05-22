import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'material',
    loadChildren: () =>
      import('./modules/material/material.module').then(
        (m) => m.MaterialModule
      ),
  },
  { path: '**', redirectTo: '/material' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
