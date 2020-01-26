import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { ControleProjetosRoutingModule } from './controle-projetos-routing.module';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';


@NgModule({
  declarations: [ProjetoFormComponent, ProjetoListComponent],
  imports: [
    CommonModule,
    ControleProjetosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ProjetoFormComponent, ProjetoListComponent]
})
export class ControleProjetosModule { }
