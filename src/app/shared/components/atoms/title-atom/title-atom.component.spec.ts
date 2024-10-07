import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAtomComponent } from './title-atom.component';

describe('TitleAtomComponent', () => {
  let component: TitleAtomComponent;
  let fixture: ComponentFixture<TitleAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
