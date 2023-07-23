import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditingComponent } from './student-editing.component';

describe('StudentEditingComponent', () => {
  let component: StudentEditingComponent;
  let fixture: ComponentFixture<StudentEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
