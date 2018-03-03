import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostItNoteComponent } from './add-post-it-note.component';

describe('AddPostItNoteComponent', () => {
  let component: AddPostItNoteComponent;
  let fixture: ComponentFixture<AddPostItNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostItNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostItNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
