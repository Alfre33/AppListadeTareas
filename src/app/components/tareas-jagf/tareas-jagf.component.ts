import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas-jagf',
  templateUrl: './tareas-jagf.component.html',
  styleUrls: ['./tareas-jagf.component.css']
})
export class TareasJagfComponent implements OnInit {

  listTareas: Tarea[]=[];
  nombreTarea ='';


constructor() { }

ngOnInit(): void {
}

agregarTarea() {
  //Crear objeto tarea
  const tarea:Tarea={
    nombre:this.nombreTarea,
    estado:false}
// Agregar el objeto al array
this.listTareas.push(tarea)
//Resetear la variable del form
this.nombreTarea='';
  }

  eliminarTarea(index:number): void {
    this.listTareas.splice(index,1);	
  
  }

  actualizarTarea(index:number,tarea:Tarea):void{
      // Cambiar el estado de la tarea
  tarea.estado = !tarea.estado;
  // Actualizar la tarea en el array
  this.listTareas[index] = tarea;
  }
}
