import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQuestionsComponent } from './interview-questions.component';

describe('InterviewQuestionsComponent', () => {
  let component: InterviewQuestionsComponent;
  let fixture: ComponentFixture<InterviewQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});