import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  porcentaje = 3.3;
  fecha = new Date();
  segundos = 306;
  dinero = -45;
}
