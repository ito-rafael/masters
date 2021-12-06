import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PaisService } from 'src/app/services/pais.service';
import { UniversidadeService } from 'src/app/services/universidade.service';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PaisService,
    UniversidadeService
  ]
})
export class PainelModule { }
