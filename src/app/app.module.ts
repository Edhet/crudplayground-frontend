import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './pages/list/list.component';
import {StudentListComponent} from './components/student-list/student-list.component';
import {StudentCreationComponent} from './components/student-creation/student-creation.component';
import {HttpClientModule} from "@angular/common/http";
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {FormsModule} from "@angular/forms";
import { ChangeDatabaseComponent } from './components/change-database/change-database.component';
import { StudentEditingComponent } from './components/student-editing/student-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StudentListComponent,
    StudentCreationComponent,
    ConfirmationComponent,
    ChangeDatabaseComponent,
    StudentEditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
