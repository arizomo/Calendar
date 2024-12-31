import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {

    @Output() mensajeDesdeHijo = new EventEmitter<string>();
    @Output() incrementarDesdeHijo = new EventEmitter<void>();
    @Output() decrementarDesdeHijo = new EventEmitter<void>();

    mensaje: string = '';

    incrementar(): void {
        this.incrementarDesdeHijo.emit();
    }

    decrementar(): void {
        this.decrementarDesdeHijo.emit();
    }

    enviarMensaje(): void {
        this.mensajeDesdeHijo.emit(this.mensaje);
    }
}
