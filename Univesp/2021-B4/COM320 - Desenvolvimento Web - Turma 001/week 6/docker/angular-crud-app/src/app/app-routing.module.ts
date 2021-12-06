import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './components/painel/painel.component';

const routes: Routes = [
  {
    path: '',
    component: PainelComponent,
    pathMatch: 'full'
  },
  {
    path: 'pais',
    loadChildren: () => import('src/app/components/pais/pais.module').then(m => m.PaisModule)
  },
  {
    path: 'universidade',
    loadChildren: () => import('src/app/components/universidades/universidades.module').then(m => m.UniversidadesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
