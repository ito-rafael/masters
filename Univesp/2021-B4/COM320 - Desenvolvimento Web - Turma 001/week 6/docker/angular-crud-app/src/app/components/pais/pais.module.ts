import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais.component';
import { PaisRoutingModule } from './pais-routing.module';
import { PaisService } from 'src/app/services/pais.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaisComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PaisService
  ]
})
export class PaisModule { }
