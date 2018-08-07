import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadorRoutingModule } from './indicador-routing.module';
import { IndicadorComponent } from './indicador/indicador.component';

@NgModule({
  imports: [
    CommonModule,
    IndicadorRoutingModule
  ],
  declarations: [IndicadorComponent]
})
export class IndicadorModule { }
