import {Component, Input, OnInit, Output} from '@angular/core';
import Student from "../../types/student";
import {ApiService} from "../../services/api.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students?: Student[]
  public fetchedStudents = false

  public confirmingDeletion: boolean = false
  public confirmingEditing: boolean = false

  public idForAction?: string


  @Input() createdStudentObserver?: Subject<void>

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.databaseChangeObserver.subscribe(_value => this.fetchStudents())
    this.createdStudentObserver?.subscribe(_value => this.fetchStudents())
    this.fetchStudents()
  }

  private fetchStudents() {
    this.fetchedStudents = false
    this.apiService.getStudents().then(value => {
      this.students = value
      this.fetchedStudents = true
    })
  }

  public openDeletionPrompt(id?: string) {
    this.confirmingDeletion = true
    this.idForAction = id
  }

  public deleteStudent(confirmation: boolean) {
    if (confirmation && this.idForAction)
      this.apiService.deleteStudent(this.idForAction)
        .then(r => this.fetchStudents())
        .catch(r => console.log(r))

    this.confirmingDeletion = false
    this.idForAction = undefined
  }

  public openEditingPrompt(id?: string) {
    this.confirmingEditing = true
    this.idForAction = id
  }

  public editedStudent(shouldFetch: boolean) {
    if (shouldFetch)
      this.fetchStudents()
    this.confirmingEditing = false
    this.idForAction = undefined
  }
}
