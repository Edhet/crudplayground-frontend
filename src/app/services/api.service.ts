import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Student from "../types/student";
import {firstValueFrom, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASE_API_URI = "http://localhost:8080/api/v1/student"
  private readonly POSSIBLE_DATABASES = ["mongo", "postgres"]

  private _selectedDb = "mongo";

  public databaseChangeObserver: Subject<string> = new Subject()

  constructor(private httpClient: HttpClient) {
    this.databaseChangeObserver.subscribe(value => this._selectedDb = value)
  }

  set selectedDb(database: string) {
    if (!this.POSSIBLE_DATABASES.includes(database))
      throw new Error("Invalid database selected")
    this.databaseChangeObserver.next(database)
  }

  get selectedDb(): string {
    return this._selectedDb;
  }

  public async getStudents() {
    const requestUri = this.BASE_API_URI + `?database=${this._selectedDb}`
    let responseObservable = this.httpClient.get<Student[]>(requestUri)
    return await firstValueFrom(responseObservable)
  }

  public async getStudent(id: string): Promise<Student | string> {
    const requestUri = this.BASE_API_URI + `/${id}?database=${this._selectedDb}`
    let responseObservable = this.httpClient.get<Student>(requestUri)
    return await firstValueFrom(responseObservable).then(value => value).catch(reason => reason.error.message)
  }

  public async deleteStudent(id: string): Promise<null | string>  {
    const requestUri = this.BASE_API_URI + `/${id}?database=${this._selectedDb}`
    let responseObservable = this.httpClient.delete(requestUri);
    return await firstValueFrom(responseObservable).then(_value => null).catch(reason => reason.error.message)
  }

  public async createStudent(newStudent: Student): Promise<null | string> {
    const requestUri = this.BASE_API_URI + `?database=${this._selectedDb}`
    let responseObservable = this.httpClient.post(requestUri, newStudent)
    return await firstValueFrom(responseObservable).then(_value => null).catch(reason => reason.error.message)
  }

  public async updateStudent(id: string, newValues: Student): Promise<null | string> {
    const requestUri = this.BASE_API_URI + `/${id}?database=${this._selectedDb}`
    let responseObservable = this.httpClient.put(requestUri, newValues)
    return await firstValueFrom(responseObservable).then(_value => null).catch(reason => reason.error.message)
  }
}
