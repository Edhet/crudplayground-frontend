import {Component} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public createStudentObserver = new Subject<void>()

  updateStudentList() {
    this.createStudentObserver.next()
  }
}
