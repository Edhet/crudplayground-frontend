import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDatabaseComponent } from './change-database.component';

describe('ChangeDatabaseComponent', () => {
  let component: ChangeDatabaseComponent;
  let fixture: ComponentFixture<ChangeDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
