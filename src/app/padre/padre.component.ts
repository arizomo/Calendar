import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})

export class PadreComponent {

  mensajeRecibido: string = '';

  recibirMensaje($event: string): void {
    this.mensajeRecibido = $event;
  }

  //CONTADOR:
  valorContador: number = 0;

  incrementar(): void {
    this.valorContador++;
  }

  decrementar(): void {
    this.valorContador--;
  }
}
