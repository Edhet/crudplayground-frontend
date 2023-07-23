import {Component, EventEmitter, Output} from '@angular/core';
import Student from "../../types/student";
import {ApiService} from "../../services/api.service";
import validStudent from "../../utils/valid-student";

@Component({
  selector: 'app-student-creation',
  templateUrl: './student-creation.component.html',
  styleUrls: ['./student-creation.component.css']
})
export class StudentCreationComponent {
  public readonly TODAY = new Date()

  public newStudent: Student = {name: undefined, email: undefined, course: undefined, gender: "MALE", birthDate: undefined};
  public errorMessage: string | null = null

  @Output() createdStudent: EventEmitter<void> = new EventEmitter<void>()

  constructor(private apiService: ApiService) {
  }

  public async onSubmit($event: SubmitEvent) {
    this.errorMessage = null
    $event.preventDefault()
    if (!validStudent(this.newStudent)) {
      this.errorMessage = "Invalid student information"
      return
    }
    this.errorMessage = await this.apiService.createStudent(this.newStudent);
    if (!this.errorMessage) {
      this.createdStudent.emit()
      this.resetStudent()
    }
  }

  private resetStudent() {
    this.newStudent = {name: undefined, email: undefined, course: undefined, gender: "MALE", birthDate: undefined}
  }


}
