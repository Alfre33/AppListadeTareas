import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarJagfComponent } from './components/navbar-jagf/navbar-jagf.component';
import { TareasJagfComponent } from './components/tareas-jagf/tareas-jagf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJagfComponent,
    TareasJagfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
