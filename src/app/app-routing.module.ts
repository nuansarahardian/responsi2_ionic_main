
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pelanggaran',
    loadChildren: () => import('./pelanggaran/pelanggaran.module').then(m => m.PelanggaranPageModule)
  },
  // ... rute lainnya
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
