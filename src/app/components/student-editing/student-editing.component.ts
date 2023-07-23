import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Student from "../../types/student";
import {ApiService} from "../../services/api.service";
import validStudent from "../../utils/valid-student";

@Component({
  selector: 'app-student-editing',
  templateUrl: './student-editing.component.html',
  styleUrls: ['./student-editing.component.css']
})
export class StudentEditingComponent implements OnInit {
  public readonly TODAY = new Date()

  public errorMessage: string | null = null
  public studentToEdit: Student = {name: "", email: "", course: "", gender: "MALE", birthDate: undefined}
  public fetchingInfo = true

  public changedSomething = false;

  @Input() editingId: string = ""
  @Output() editedStudent: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private apiService: ApiService) {
  }

  async ngOnInit() {
    this.fetchingInfo = true
    let response = await this.apiService.getStudent(this.editingId);
    if (typeof response != "string")
      this.studentToEdit = response
    else
      this.cancel()
    this.fetchingInfo = false
  }

  public async confirm() {
    if (!this.changedSomething) {
      this.editedStudent.emit(false)
      return
    }
    else if (!validStudent(this.studentToEdit)) {
      this.errorMessage = "Invalid student information"
      return
    }
    this.errorMessage = await this.apiService.updateStudent(this.editingId, this.studentToEdit);
    if (!this.errorMessage)
      this.editedStudent.emit(true)
  }

  public cancel() {
    this.editedStudent.emit(false)
  }

}
