import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaAtomComponent } from './textarea-atom.component';

describe('TextareaAtomComponent', () => {
  let component: TextareaAtomComponent;
  let fixture: ComponentFixture<TextareaAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaAtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
