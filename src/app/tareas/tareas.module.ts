import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { MenuComponent } from './menu/menu.component';
import { ListaTareasComponent } from './tareas-plus/lista-tareas/lista-tareas.component';
import { TareaSimpleComponent } from './tarea-simple/tarea-simple.component';
import { TareaPlusModule } from './tarea-plus/tarea-plus.module';


@NgModule({
  declarations: [TareasComponent, MenuComponent, TareaSimpleComponent, ListaTareasComponent],
  imports: [
    CommonModule,
    TareasRoutingModule,
    TareaPlusModule
  ],
  exports: [ListaTareasComponent]
})
export class TareasModule { }
