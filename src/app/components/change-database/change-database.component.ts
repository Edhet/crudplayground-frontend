import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-change-database',
  templateUrl: './change-database.component.html',
  styleUrls: ['./change-database.component.css']
})
export class ChangeDatabaseComponent {

  constructor(public apiService: ApiService) {
  }
}
