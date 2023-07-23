import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  @Output() answer: EventEmitter<boolean> = new EventEmitter<boolean>();

  public confirm() {
    this.answer.emit(true)
  }

  public decline() {
    this.answer.emit(false)
  }
}
