import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversidadesComponent } from './universidades.component';
import { UniversidadesRoutingModule } from './universidades-routing.module';
import { PaisService } from 'src/app/services/pais.service';
import { UniversidadeService } from 'src/app/services/universidade.service';

@NgModule({
  declarations: [
    UniversidadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UniversidadesRoutingModule,
  ],
  providers: [
    PaisService,
    UniversidadeService
  ]
})
export class UniversidadesModule { }
